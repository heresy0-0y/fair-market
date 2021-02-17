import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../services/users";
import "./SignUp.css";
import Layout from "../../components/shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/storefront-social/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">sign up !</button>;
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="form-container">
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <label>username</label>
          <input
            className="input-signup"
            required
            type="text"
            name="username"
            value={username}
            placeholder="type username here"
            onChange={handleChange}
          />
          <br />
          <label>email address</label>
          <input
            className="input-signup"
            required
            type="email"
            name="email"
            value={email}
            placeholder="type email here"
            onChange={handleChange}
          />
          <br />
          <label>password</label>
          <input
            className="input-signup"
            required
            name="password"
            value={password}
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <label>Password Confirmation</label>
          <input
            className="input-signup"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="please type password again, for confirmation"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
