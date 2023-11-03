import { useRef, useState } from "react"

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault()
    const email = (emailRef.current.value)
    const password = (passwordRef.current.value)

    const emailIsInvalid = !email.includes("@")
    if (emailIsInvalid) {
      setEmailIsInvalid(true)
      return;
    }
    setEmailIsInvalid(false)
    console.log("Submitting the form and triggering HTTP request.")
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div>{emailIsInvalid && <p>Please enter a valid email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
