import React from "react";

const PudioApi = ({ data }) => {
  return (
    <div>
      <ul>
        {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
};
export default PudioApi;
