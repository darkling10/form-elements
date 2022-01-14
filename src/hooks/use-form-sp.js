import React, { useState } from "react";

export const useFormSP = (validateFun) => {
  const [valueEntered, setvalueEntered] = useState("");
  const [isTouched, setisTouched] = useState(false);


  const isValid = validateFun(valueEntered);
  const hasError = isTouched && !isValid;

  const enteredValueHandler = (event) => {
    setvalueEntered(event.target.value);
  };

  const blurChangeHandler = () => {
    setisTouched(true);
  };

  const resetHandler = () => {
    setvalueEntered("");
    setisTouched(false);
  };

  return {
    value: valueEntered,
    hasError,
    isValid:isValid,
    enteredValueHandler,
    blurChangeHandler,
    resetHandler,
  };
};
