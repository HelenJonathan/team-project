import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Cta } from './Styles';
import { HiEye, HiEyeOff } from "react-icons/hi";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setInputField({
      ...inputField,
      showPassword: !inputField.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(inputField.title);

    const cred = {
      email: inputField.email,
      password: inputField.password,
    };

    console.log(cred);

    //  axios
    //    .post("/sign-in", cred)
    //    .then((res) => console.log(res.data));
  };
  return (
    <Cont>
      <Wrap>
        <h3 className="heading">Sign In</h3>
        {error && <div className="error">{error}</div>}
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.email}
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type={inputField.showPassword ? "text" : "password"}
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.password}
              />
              <div
                className="show"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <p>{inputField.showPassword ? <HiEyeOff/> : <HiEye/>}</p>
              </div>
            </InputField>
          </FormControl>
          {/* <Cta> */}
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {/* </Cta> */}
        </Form>
        <div className="link">
          <p>
            Don't have an Account? <Link to="/sign-up">Sign Up</Link>{" "}
          </p>
          <p>
            {" "}
            <Link to="/forgotPassword">Forgot password?</Link>{" "}
          </p>
        </div>
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 15vh 5% 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6bb0dd;
`;
const Wrap = styled.div`
  /* p  */
  width: 50%;
  margin: 3rem auto;
  border: 1px solid #002;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .link {
    margin: 20px 0;
    display: grid;
    gap: 10px;
  }
`;
const Form = styled.form`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  button {
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;
const FormControl = styled.div`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;
const InputField = styled.div`
  /* p  */
  width: 100%;
  position: relative;

  .show {
    position: absolute;
    right: 20px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s all;
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }
`;
const Input = styled.input`
  /* p  */
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.05);
`;

export default SignIn;
