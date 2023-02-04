import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../shared";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
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
            <Typography level="body2">Sign Up to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Skyler White Yo!"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="walterwhite@gmail.com"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              minLength={8}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </FormControl>

          <Button
            sx={{ mt: 1 }}
            onClick={(e) => {
              e.preventDefault();
              if (ValidateEmail(user.email)) {
                signUpFunction(user, navigate);
              }
            }}
          >
            Sign Up
          </Button>
          <Typography
            endDecorator={<Link href="/">Log in</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

function ValidateEmail(mail) {
  console.log(mail);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

async function signUpFunction(user, navigate) {
  const baseurl = baseUrl
  const res = (
    await axios
      .post(baseurl +"/user/", {
        email: user.email,
        password: user.password,
        name: user.name,
      })
      .catch((err) => {
        alert(err);
      })
  ).data;

  const data = await res.data;
  localStorage.setItem("id", data._id);
  console.log(data, localStorage.getItem("id"));

  if (res.status === 401) {
    alert(res.message);
    return;
  }
  if (res.status === 404) {
    alert(res.message);
    return;
  }
  if (res.status === 200) {
    navigate("/");
  }
}
