import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiData = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFat = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFat();
  }, []);

  //Read data without click
  //   useEffect(() => {
  //     axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //     });
  //   }, []);

  return (
    <div>
      <button onClick={fetchCatFat} className="btn btn-primary">
        {" "}
        Generate Cat Fact
      </button>
      <p className="mt-3"> {catFact} </p>
    </div>
  );
};

export default ApiData;
