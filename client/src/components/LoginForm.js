import { useState } from "react";
import { StyledLogin } from "../styled/Login.styled";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

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
        <h3>Login</h3>
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
export default LoginForm;
