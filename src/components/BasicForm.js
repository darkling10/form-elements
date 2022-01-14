import { useFormSP } from "../hooks/use-form-sp";

const BasicForm = (props) => {
  const {
    value: fNameValue,
    hasError: fNameHasError,
    isValid: fNameisValid,
    enteredValueHandler: fNameValueHandler,
    blurChangeHandler: fNameBlurHandler,
    resetHandler: fNamereset,
  } = useFormSP((value) => value.trim() !== "");

  const {
    value: lNameValue,
    hasError: lNameHasError,
    isValid: lNameisValid,
    enteredValueHandler: lNameValueHandler,
    blurChangeHandler: lNameBlurHandler,
    resetHandler: lNamereset,
  } = useFormSP((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailisValid,
    enteredValueHandler: emailValueHandler,
    blurChangeHandler: emailBlurHandler,
    resetHandler: emailreset,
  } = useFormSP((value) => value.includes("@"));

  let formControl = false;

  if (fNameisValid && lNameisValid && emailisValid) {
    formControl = true;
  }

  const submitTouched = () => {
    fNameBlurHandler();
    lNameBlurHandler();
    emailBlurHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formControl);

    if (!formControl) {
      return;
    }

    console.log(fNameValue, lNameValue, emailValue);
    fNamereset();
    lNamereset();
    emailreset();
  };

  const fNameClassControl = fNameHasError
    ? "form-control invalid"
    : "form-control";
  const lNameClassControl = lNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClassControl = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameClassControl}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameValueHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
          />
          {fNameHasError && (
            <p className="error-text">Please Enter a Valid First Name</p>
          )}
        </div>
        <div className={lNameClassControl}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameValueHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
          />
          {lNameHasError && (
            <p className="error-text">Please Enter a Valid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailClassControl}>
        <label htmlFor="name">E Mail</label>
        <input
          type="text"
          id="name"
          onChange={emailValueHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Please Enter a Valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button onFocus={submitTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
