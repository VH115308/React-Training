import { useState } from "react";

const SignupForm = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Please enter a valid email address (e.g. user@example.com).";
    }

    if (!values.password) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setValues({ name: "", email: "", password: "" });
      setTouched({});
    }
  };

  const isValid = Object.keys(validate()).length === 0;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <div className="error">{errors.name}</div>}

        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )}

        <button type="submit" disabled={!isValid}>
          Sign Up
        </button>
      </form>

      <div className="rules">
        <h4>Signup Rules:</h4>
        <ul>
          <li>Name cannot be empty.</li>
          <li>Email must be valid (e.g. user@example.com).</li>
          <li>Password must be at least 6 characters long.</li>
          <li>Errors are shown when you leave a field or on submit.</li>
          <li>Submit button is disabled until all rules are satisfied.</li>
        </ul>
      </div>
    </div>
  );
};

export default SignupForm;
