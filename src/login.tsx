import "./styles/login.scss";
import { Box, TextField } from "@mui/material";
import { Button1 } from "./components/Buttons";
import React, { useState } from "react";

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
    console.log(state);
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
              onChange={onInput}
              label="email"
              name="email"
              type="email"
              fullWidth
            />
          </div>
          <div>
            <TextField
              onChange={onInput}
              label="password"
              name="password"
              type="password"
              fullWidth
            />
          </div>
          <div>
            <Button1 type="submit" fullWidth variant="contained">
              Login
            </Button1>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
