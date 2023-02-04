import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import { useParams } from "react-router-dom";
import data from "../Data/company.json";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import imgs from "../Assets/complogo.js";
import "../App.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const Company = () => {
  // const { id } = useParams();
  // const [company, setCompany] = useState({});

  // useEffect(async () => {
  //   console.log(id);
  // const data = await axios.get(
  //   `https://azathoth-production.up.railway.app/companies/${id}`
  // );
  //   console.log(data);
  // });
  return (
    <>
      <Container align="center">
        {data.comp.map((item, index) => (
          <>
            <Card
              style={{
                maxWidth: "60vw",
                marginTop: "30px",
                boxShadow: "5px 10px 5px lightgrey",
              }}
              className="compcard"
            >
              <CardHeader title={item.name} />
              <div key={index}>
                {/* <p>
                <span style={{ marginRight: "30px" }}>
                  Category: {item.category}
                </span>
                <span>Source:{item.source}</span>
              </p>
              <p>{item.summary}</p> */}
              </div>
            </Card>
            <Grid
              container
              spacing={2}
              style={{ marginTop: "40px", maxWidth: "60vw" }}
            >
              <Grid item xs={6} md={8}>
                {/* <Item>xs=6 md=8</Item> */}
                <p>Country: {item.country}</p>
                <p>Ipo released: {item.ipo}</p>
              </Grid>
              <Grid item xs={6} md={4}>
                {/* <Item> */}
                {/* {console.log(item.name)} */}
                {<img src={imgs[item.name]} width="130px" height="100px" />}
                {/* </Item> */}
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignContent: "left",
                  alignItems: "left",
                }}
              >
                <p>Description: {item.description}</p>
                {/* <Item>xs=6 md=4</Item> */}
              </Grid>
              {/* <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
              </Grid> */}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
};

export default Company;
