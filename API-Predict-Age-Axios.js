import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ApiPredictAge = () => {
  const [name, setName] = useState("");
  const [predictAge, setPreddictAge] = useState({});
  //const [predictAge, setPreddictAge] = useState(null);

  const fetchData = () => {
    // axios.get("https://api.agify.io/?name=payam");
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPreddictAge(res.data);
    });
  };

  return (
    <Container>
      <MyForm>
      <input
        className="form-control"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className="btn btn-primary" onClick={fetchData}>
        Predict Age
      </button>
      </MyForm>

      <Info>
        {/* <label>Name: {predictAge?.name} </label> use for null */}
        <div className="alert alert-primary">
        <span>Name: {predictAge.name} </span> |
        <span>Predicted Age: {predictAge.age} </span> |
        <span>Days of Age: {predictAge.count} </span>
        </div>
      </Info>

    </Container>
  );
};

export default ApiPredictAge;

const Container = styled.div`
  padding: 10px 110px 10px 110px;
  
`;

const MyForm = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-column-gap: 20px;
`;

const Info = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:5px;
  padding-top:10px;
  font-weight:bold;

  span {
    padding:0 10px 0 10px;
  }
`;
