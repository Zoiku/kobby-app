import "./styles/login.scss";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { Button1 } from "./components/Buttons";
import { reducer, initialState } from "./reducer";
import { reducerActionInterface } from "./interfaces";
import { reducerActions } from "./reducer/actions";

const Login = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: reducerActionInterface = {
      type: reducerActions.INPUT,
      prop: e.target.name,
      value: e.target.value,
    };

    dispatch(action);
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(state);
    navigate("/inventory", { replace: true });
  };

  return (
    <div className="LoginPage">
      <div className="inner_container">
        <Box
          component="form"
          className="box_form_container"
          onSubmit={onSubmit}
        >
          <div>
            <TextField
              name="email"
              label="Email"
              type="text"
              size="small"
              onChange={onChange}
              fullWidth
            />
          </div>
          <div>
            <TextField
              name="password"
              label="Password"
              type="text"
              size="small"
              onChange={onChange}
              fullWidth
            />
          </div>
          <div>
            <Button1 type="submit" fullWidth variant="contained">
              Login
            </Button1>
          </div>
          <div>
            <small style={{ color: "gray" }}>
              * just click login to simulate
            </small>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
