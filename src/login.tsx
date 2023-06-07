import "./styles/login.scss";
import { Box, TextField } from "@mui/material";
import { Button1 } from "./components/Buttons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface stateInterface {
  request: {
    payload: {};
  };
  response: {
    error: {};
    status: {};
  };
  loading: boolean;
}

const initialState: stateInterface = {
  request: {
    payload: {},
  },
  response: {
    error: {},
    status: {},
  },
  loading: false,
};

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      request: { payload: { [e.target.name]: e.target.value } },
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    try {
    } catch (error) {}
    setState({ ...state, loading: false });
  };
  const simulateLogIn = () => {
    navigate("/inventory", { replace: true });
  };

  return (
    <div className="LoginPage">
      <div className="inner_container">
        <Box
          className="box_form_container"
          component="form"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              size="small"
              onChange={onInput}
              label="email"
              name="email"
              fullWidth
            />
          </div>
          <div>
            <TextField
              size="small"
              onChange={onInput}
              label="password"
              name="password"
              fullWidth
            />
          </div>
          <div>
            <Button1 onClick={simulateLogIn} fullWidth variant="contained">
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
