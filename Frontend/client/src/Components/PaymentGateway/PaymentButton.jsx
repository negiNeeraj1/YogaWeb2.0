import React, { useState } from "react";
import { CreatePayment, VerifyPayment, EnrolledClasses } from "../../api/api";
import { CreditCard, ChevronRight, Lock } from "lucide-react";
import DarkModeClasses from "../DarkMode";

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
  classId,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      const isScriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!isScriptLoaded) {
        throw new Error(
          "Razorpay SDK failed to load. Please check your internet connection."
        );
      }

      const paymentData = {
        userId,
        classId,
        amount: Number(amount),
      };

      const result = await CreatePayment(paymentData);
      if (!result.success) {
        throw new Error(result.message || "Failed to create payment order");
      }

      const options = {
        key: "rzp_test_zR3Hw3haQMWYC9",
        amount: amount * 100,
        currency: "INR",
        name: "Yoga Class Enrollment",
        description: `Enrollment for Yoga Class`,
        order_id: result.orderId,
        handler: async function (response) {
          try {
            const verifyData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            const verificationResult = await VerifyPayment(verifyData);

            if (verificationResult.success) {
              // Fetch updated enrolled classes
              const enrolledClassesResult = await EnrolledClasses(userId);
              // Pass the updated data to parent component
              if (enrolledClassesResult && enrolledClassesResult.data) {
                onSuccess(enrolledClassesResult.data);
              } else {
                throw new Error("Failed to fetch enrolled classes after payment");
              }
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
          classId: classId,
        },
        theme: {
          color: "#4F46E5",
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        onFailure({
          success: false,
          message: response.error.description || "Payment failed",
        });
        setIsLoading(false);
      });

      paymentObject.open();
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