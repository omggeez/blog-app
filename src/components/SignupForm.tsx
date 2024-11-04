import { app } from "configs/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("Signup Success!");
      navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.code);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!value.match(validRegex)) {
        setError("Email is not valid.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value.length < 8) {
        setError("MinLength is 8 Char.");
      } else if (passwordConfirm.length > 0 && value !== passwordConfirm) {
        setError("Password is not equal.");
      } else {
        setError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);

      if (value.length < 8) {
        setError("MinLength is 8 Char.");
      } else if (value !== password) {
        setError("Password is not equal.");
      } else {
        setError("");
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="form from--lg">
      <h1 className="form__title">Join now!</h1>
      <div className="form__block">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">Password Confirm</label>
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          value={passwordConfirm}
          onChange={onChange}
          required
        />
      </div>
      {error && error.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}
      <div className="form__block">
        Already have an account?&nbsp;
        <Link to="/login" className="form__link">
          Login
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="Submit"
          className="form__btn--submit"
          disabled={error.length > 0}
        />
      </div>
    </form>
  );
}
