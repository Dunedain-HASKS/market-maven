import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import { useParams } from "react-router-dom";
import data from "../Data/company.json";

import Grid from "@mui/material/Grid";
import imgs from "../Assets/complogo.js";
import "../App.css";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://azathoth.onrender.com/companies/${id}`)
      .then((res) => {
        setCompany(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
  });

  return <>{loading ? "" : `${JSON.stringify(company)}`}
  </>;
};

export default Company;
