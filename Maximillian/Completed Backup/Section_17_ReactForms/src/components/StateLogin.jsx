import { useState } from "react";
import { Input } from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredPassword, setEnteredPassword] = useState("")
  // const [formInput, setFormInput] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputOnblur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputOnblur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) return;
    console.log(emailValue, passwordValue);
  }

  // function handleInput(identifier, value) {
  //   setFormInput((prevValue) => ({ ...prevValue, [identifier]: value }));
  //   setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  // }

  // function handleValidateOnblur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }
  //Form validation
  // const isEmailInvalid =
  //   didEdit.email && !isEmail(formInput.email) && !isNotEmpty(formInput.email);
  // const isPasswordInvalid =
  //   didEdit.password && !hasMinLength(formInput.password, 6);

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleEmailBlur()}
          onChange={(e) => handleEmailChange(e)}
          value={emailValue}
          error={emailHasError && "Please enter a valid email."}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handlePasswordBlur()}
          onChange={(e) => handlePasswordChange(e)}
          value={passwordValue}
          error={passwordHasError && "Please enter valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
