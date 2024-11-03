import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form action="/post" method="POST" className="form from--lg">
      <h1 className="form__title">Welcome to Blog App!</h1>
      <div className="form__block">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form__block">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="form__block">
        New to Blog App?&nbsp;
        <Link to="/signup" className="form__link">
          Create an account
        </Link>
      </div>
      <div className="form__block">
        <input type="submit" value="Login" className="form__btn--submit" />
      </div>
    </form>
  );
}
