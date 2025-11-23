// Middleware to parse nested FormData fields
// Converts flat FormData like "schedule[startDate]" to nested objects
export const parseFormData = (req, res, next) => {
  if (req.body && typeof req.body === 'object') {
    console.log("Original req.body:", JSON.stringify(req.body, null, 2));
    
    const result = {};
    const nestedFields = {};
    
    // Separate regular fields from nested fields
    for (const [key, value] of Object.entries(req.body)) {
      if (key.includes('[') && key.includes(']')) {
        nestedFields[key] = value;
      } else {
        result[key] = value;
      }
    }
    
    // Process nested fields
    for (const [key, value] of Object.entries(nestedFields)) {
      // Extract keys from "schedule[startDate]" or "schedule[daysOfWeek][0]"
      const keys = key.match(/[^\[\]]+/g) || [];
      
      if (keys.length === 0) continue;
      
      const rootKey = keys[0];
      
      // Initialize root object if needed
      if (!result[rootKey]) {
        result[rootKey] = {};
      }
      
      let current = result[rootKey];
      
      // Navigate through nested structure
      for (let i = 1; i < keys.length - 1; i++) {
        const k = keys[i];
        const nextKey = keys[i + 1];
        
        // Check if next key is a number (array index)
        if (!isNaN(nextKey)) {
          // Next is an array, so current should be an array
          if (!Array.isArray(current[k])) {
            current[k] = [];
          }
          current = current[k];
        } else {
          // Next is an object property
          if (!current[k] || Array.isArray(current[k])) {
            current[k] = {};
          }
          current = current[k];
        }
      }
      
      // Set the final value
      const lastKey = keys[keys.length - 1];
      if (!isNaN(lastKey)) {
        // Last key is an array index
        const arrayKey = keys[keys.length - 2];
        if (!Array.isArray(current[arrayKey])) {
          current[arrayKey] = [];
        }
        const index = parseInt(lastKey);
        current[arrayKey][index] = value;
      } else {
        // Last key is an object property
        current[lastKey] = value;
      }
    }
    
    // Clean up: remove flat nested field keys from result
    for (const key of Object.keys(nestedFields)) {
      if (result[key]) {
        delete result[key];
      }
    }
    
    req.body = result;
    
    console.log("Parsed req.body:", JSON.stringify(req.body, null, 2));
  }
  
  next();
};

