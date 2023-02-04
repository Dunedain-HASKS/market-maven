import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
// import Link from "@mui/joy/Link";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="walterwhite@gmail.com"
              onChange={(e) => {
                setAuth({ ...auth, email: e.target.value });
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => {
                setAuth({ ...auth, password: e.target.value });
              }}
            />
          </FormControl>

          <Button
            sx={{ mt: 1 }}
            onClick={(e) => {
              e.preventDefault();
              if (ValidateEmail(auth.email)) {
                LogInFunction(navigate, auth);
              }
            }}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link to="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

const LogInFunction = async (navigate, auth) => {
  console.log(auth,baseUrl);
  const res = (
    await axios
      .post(baseUrl +"auth/", {
        email: auth.email,
        password: auth.password,
      })
      .catch((err) => {
        alert(err);
      })
  ).data;

  localStorage.setItem("id", data._id);
  console.log(data, localStorage.getItem("id"));

  if (res.status === 401) {
    alert(res.message);
    return;
  }

  const data = res.data.data;
  console.log(res.data);
  localStorage.setItem("id", data._id);
  console.log(data, localStorage.getItem("id"));

  // if (res.status === 200) {
  //   navigate("/dashboard");
  // }
  // if (res.status === 404) {
  //   alert("Please Enter the Password");
  // }
};
