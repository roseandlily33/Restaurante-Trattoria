import { useState } from "react";
import Auth from "../utils/auth";
import { StyledLogin } from "../styled/Login.styled";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <StyledLogin>
        <h3>Sign Up</h3>
        <label>Username: </label>
        <input
          type="text"
          value={formState.username}
          name="username"
          onChange={handleChange}
          required
        />
        <label>Email: </label>
        <input
          type="text"
          value={formState.email}
          name="email"
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={formState.password}
          name="password"
          onChange={handleChange}
          required
        />
        <button className="button">Submit</button>
      </StyledLogin>
    </div>
  );
};

export default SignupForm;
