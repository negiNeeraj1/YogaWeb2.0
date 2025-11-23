import React, { useState } from "react";
import { subscriptionPayment, verifySubscriptionPayment } from "../../api/api"; // Your subscription payment API methods
import { CreditCard, ChevronRight, Lock } from "lucide-react";
import DarkModeClasses from "../DarkMode";

// Load Razorpay SDK dynamically
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const PaymentButton = ({
  amount,
  onSuccess,
  onFailure,
  text = "Pay Now",
  userId,
  planId,
  className,
  updateSubscriptionStatus,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {

    try {
      setIsLoading(true);

      // Load Razorpay SDK dynamically
      const isScriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!isScriptLoaded) {
        throw new Error(
          "Razorpay SDK failed to load. Please check your internet connection."
        );
      }

      // Create subscription payment data
      const paymentData = {
        userId,
        planId,
        amount: Number(amount),
      };

      // Call the subscription payment API
      const result = await subscriptionPayment(paymentData);
      if (!result.success) {
        throw new Error(
          result.message || "Failed to create subscription payment order"
        );
      }

      const options = {
        key: "rzp_test_zR3Hw3haQMWYC9", // Your Razorpay Key
        amount: amount * 100, // Razorpay requires amount in paise (cents)
        currency: "INR",
        name: "Subscription Payment",
        description: `Subscription for Yoga Plan`,
        order_id: result.orderId, // The orderId returned from your API
        handler: async function (response) {
          try {
            // Payment verification
            const verifyData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            // Call the verify subscription payment API
            const verificationResult = await verifySubscriptionPayment(
              verifyData
            );

            if (verificationResult.success) {
              // Update subscription status
              updateSubscriptionStatus(verificationResult.data);

              // Trigger success callback
              onSuccess(verificationResult.data);
            } else {
              throw new Error(
                verificationResult.message || "Payment verification failed"
              );
            }
          } catch (error) {
            onFailure({
              success: false,
              message: error.message || "Payment verification failed",
            });
          }
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
          contact: "",
        },
        notes: {
          userId: userId,
          planId: planId, // Passing the planId here as well
        },
        theme: {
          color: "#4F46E5", // Customize the color
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false); // Reset loading state if modal is dismissed
          },
        },
      };

      // Initialize and open Razorpay payment window
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        onFailure({
          success: false,
          message: response.error.description || "Payment failed",
        });
        setIsLoading(false);
      });

      paymentObject.open(); // Open the Razorpay payment modal
    } catch (error) {
      onFailure({
        success: false,
        message: error.message || "Payment initialization failed",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className={`${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      } flex items-center justify-center gap-2`}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>Processing...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default PaymentButton;
