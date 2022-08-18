import React from "react";

export const FragmentSample = () => {
  const name = "Payam";
  const checkName = true;
  return (
    <div>
      {checkName ? (
        <>
          <h2 style={{ color: "#6CD2FE" }}>Hello {name}</h2>
        </>
      ) : (
        <>
          <h2 style={{ color: "#F27CA4" }}>GoodBye {name}</h2>
        </>
      )}
    </div>
  );
};
