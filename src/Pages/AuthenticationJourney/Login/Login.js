import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import BasicCard from "../../../SharedComponents/Card/BasicCard";
import Text from "../../../SharedComponents/Texts/Text";
import TextInput from "../../DashboardJourney/Elements/TextInput/TextInput";
import BasicCta from "../../DashboardJourney/Elements/Buttons/BasicCta";
import { Box } from "@mui/material";
import { decodeToken } from "../../../Utils//AuthUtils";
import { useAuth } from "../../../Context/Authentication.context";

function Login() {
  const [formData, setFormData] = useState({});
  const navigator = useNavigate();
  const { setDecoded } = useAuth();

  function handleInput(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  }

  function handleLogin(e) {
    fetch("http://localhost:5000/auth/signin", {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success && res.token) {
          const decodedToken = decodeToken(res.token);
          try {
            sessionStorage.setItem("AuthToken", JSON.stringify(decodedToken));
            sessionStorage.setItem("Authorization", res.token);
            setDecoded(decodedToken);
            if (decodedToken.role.includes("admin")) {
              navigator("/dashboard/");
            } else {
              navigator("/app/halls");
            }
          } catch (err) {
            console.error("Error Saving Token", err);
          }
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <AuthLayout>
      <BasicCard
        overrides={{
          width: "350px",
          minWidth: "350px",
        }}
      >
        <Text text="Sign In" variant={"h4"} />
        <Text text="Sign in to find best Hall matches" variant={"paragraph"} />
        <Box
          sx={{
            width: "100%",
            height: "20px",
          }}
        />
        <TextInput
          label="Email"
          overrides={{
            marginBottom: "15px",
          }}
          id={"email"}
          onChange={handleInput}
        />
        <TextInput
          label="Password"
          overrides={{
            marginBottom: "15px",
          }}
          id={"password"}
          onChange={handleInput}
        />
        <BasicCta
          text="Sign In"
          overrides={{
            height: "50px",
          }}
          onClick={handleLogin}
        />
      </BasicCard>
    </AuthLayout>
  );
}

export default Login;
