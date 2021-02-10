import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../services/users";
import "./SignUpIn";

const SignUpIn = (props) => {
  const { setUse, clearUser, user } = props;

  const [form, setForm] = useState({
    username: "",
    password: "",
    errorMsg: "",
    isError: false,
  });

  const history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUp = (e) => {
    e.preventDefault();
    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/storefront-social"))
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

  const onSignIn = (e) => {
    e.preventDefault();
    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/storefront-social"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "invalid creds",
          username: "",
          password: "",
        });
      });
  };

  useEffect(() => {
    signOut(user).then(() => clearUser());
  });

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <Switch>
          <Route path="/signin">
            <button type="submit">sign in;</button>
          </Route>
          <Route path="/signup">
            <button ype="submit">sign up !</button>
          </Route>
        </Switch>
      );
    }
  };

  const { username, password, email, passwordConfirmation } = form;

  return <div className="form-container"></div>;
};
