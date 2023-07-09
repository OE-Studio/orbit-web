export const validateBVNNumber = (input) => {
    const numberRegex = /^\d{11}$/;
    return numberRegex.test(input);
  };

  export const validateAccountNumber = (input) => {
    const numberRegex = /^\d{10}$/;
    return numberRegex.test(input);
  };


 export const validateEmail = (email) => {
    // Email validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };