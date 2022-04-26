import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ResetPassword = () => {

  const [error, setError] = useState("");
  const [inputField, setInputField] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  // console.log(useLocation().search.slice(0, useLocation().search.length).split("=").pop())





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
      // email,
      password: inputField.password,
      confirmPassword: inputField.confirmPassword,
    };

    console.log(cred);

    try {
      const url = "/api/auth/resetPassword";
      const { data: res } = await axios.post(url, cred);
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }

    //  axios
    //    .post("/sign-in", cred)
    //    .then((res) => console.log(res.data));
  };



  return (
    <Cont>
      {/* {verifiedToken && !error ? ( */}
      <Wrap>
        <header>
          <h3 className="heading">Reset password</h3>
          <p className="desc">Please Enter your email</p>
        </header>

        <Form onSubmit={handleSubmit}>
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
                <p>{inputField.showPassword ? <HiEyeOff /> : <HiEye />}</p>
              </div>
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={inputField.showPassword ? "text" : "password"}
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.confirmPassword}
              />
              <div
                className="show"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <p>{inputField.showPassword ? <HiEyeOff /> : <HiEye />}</p>
              </div>
            </InputField>
          </FormControl>
            <Link to='/VerifyEmail'>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
          </Link>
        </Form>
      </Wrap>
      {/* ) : error ? (
        error
      ) : (
        <h1>"verifying please wait...."</h1>
      )} */}
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
  margin: 5rem auto;
  border: 1px solid #002;
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  header {
    margin-bottom: 20px;
    .heading {
      margin-bottom: 10px;
      font-size: 30px;
    }
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
    transition: 0.5s all;
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

export default ResetPassword;
