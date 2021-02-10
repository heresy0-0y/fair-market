import { useState } from "react";

const SignUpIn = (props) => {
  const { setUser } = props;

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

  const onSignIn = (e) => {
    e.preventDefault();
  };
};
