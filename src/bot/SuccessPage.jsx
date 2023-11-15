import React from "react";
import { useSelector } from "react-redux";

const SuccessPage = () => {
  const details = useSelector((state) => state.details);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        background: "#376D7E",
      }}
    >
      <h1 style={{ color: "white", width: "400px", textAlign: "center" }}>
        Your Name {details.name} aged {details.age} has been added to student
        system. You May now exit
      </h1>
    </div>
  );
};

export default SuccessPage;
