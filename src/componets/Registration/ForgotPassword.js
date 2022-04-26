import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Forgotpassword = () => {
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState({
    email: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(inputField.title);

    const cred = {
      email: inputField.email,
    };

    console.log(cred);

    try {
      const url = "/api/auth/forgot_password/";
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
      <Wrap>
        <header>
          <h3 className="heading">Forgot password?</h3>
          <p className="desc">Please Enter your email</p>
        </header>

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
          <Link to="/resetPassword">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Link>
        </Form>
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

export default Forgotpassword;
