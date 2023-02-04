import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import CardHeader from "@mui/material/CardHeader";
import { useParams } from "react-router-dom";
import data from "../Data/company.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import imgs from "../Assets/complogo.js";
import "../App.css";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://azathoth.onrender.com/companies/${id}`)
      .then((res) => {
        setCompany(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {loading ? "" : `${JSON.stringify(company)}`}
      <div className="container py-5">
        <div className="row d-flex">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  className="img-fluid rounded-circle"
                  src={company.logo}
                  alt="avatar"
                  style={{ width: "250px", height: "250px" }}
                />
                <p className="text-muted mt-3">{company.name}</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/companies ");
                    }}
                  >
                    Go Back
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Country</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">{company.country}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-3">
                    <p className="card-text">Ticker</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">${company.ticker}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-3">
                    <p className="card-text">ipo released</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">
                      {company.ipo.substring(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-3">
                    <p className="card-text">Company site</p>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
