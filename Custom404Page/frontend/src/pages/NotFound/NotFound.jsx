import React from "react";
import NotFoundImage from "../../assets/Not_found_page.jpg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          src={NotFoundImage}
          alt=""
        />
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          width: "120px",
          height: "40px",
          cursor: "pointer",
          border: "none",
          outline: "none",
          backgroundColor: "orange",
          color: "#fff",
          fontSize: "14px",
          letterSpacing: "0.05rem",
          borderRadius: "5px",
          fontWeight: 500,
          textTransform: "uppercase",
          boxShadow:
            "0 0 5px rgba(255, 165, 0, 0.5), 0 0 10px rgba(255, 165, 0, 0.5)",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
