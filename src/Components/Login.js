import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "Login"));
    console.log(errors);
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you Log in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Login</h2>
        <div className={styles.formFiled}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formFiled}>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Log in</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
