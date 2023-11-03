import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [formInput, setFormInput] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(formInput);
  function handleInputChange(event) {
    setFormInput(event.target.value);
    setDidEdit(false);
  }

  function handleInputOnblur(identifier) {
    setDidEdit(true);
  }

  return {
    value: formInput,
    handleInputChange,
    handleInputOnblur,
    hasError: didEdit && !valueIsValid,
  };
}
