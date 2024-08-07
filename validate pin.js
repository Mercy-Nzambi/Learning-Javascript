function validatePIN(pin) {
  // Regular expression to check if the string contains only digits
  const isNumeric = /^\d+$/;
  
  // Check if the pin is a string and has a length of 4 or 6
  // Also, check if all characters in the pin are digits
  if (typeof pin === 'string' && 
      (pin.length === 4 || pin.length === 6) && 
      isNumeric.test(pin)) {
    return true;
  } else {
    return false;
  }
}
