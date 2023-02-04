import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import { useParams } from "react-router-dom";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({
    name: "",
  });

  useEffect(async () => {
    const data = await axios.get(
      `https://azathoth-production.up.railway.app/companies/`
    );
    console.log(data);
  });
  return (
    <>
      <Container>
        <Card>
          <CardHeader title="Company" />
        </Card>
      </Container>
    </>
  );
};

export default Company;
