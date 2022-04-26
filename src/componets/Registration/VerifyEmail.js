import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);
  const token = useLocation()
    .search.slice(0, useLocation().search.length)
    .split("=")
    .pop();

  console.log(token);

  useEffect(() => {
    if (token) {
      const url = `/api/email/verify?token=${token}`;
      axios.get(url).then((res) => {
        console.log(res);
        setVerified(true);
      });
    }
  }, []);

  return (
    <Cont>
      <Wrap>
        <h1>
          {verified && !error
            ? "you are verified, please sign in."
            : error
            ? error
            : "verifying please wait...."}
        </h1>
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

export default VerifyEmail;
