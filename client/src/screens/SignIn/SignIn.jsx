import { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { signIn } from "../../services/users";
import "./SignIn.css";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/storefront-social"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "invalid creds :/",
          username: "",
          password: "",
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
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="form-container">
        <h3>Sign In</h3>
        <form onSubmit={onSignIn}>
          <label>username</label>
          <input
            required
            className="username-sign-in"
            type="text"
            name="username"
            value={username}
            placeholder="type username here"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
