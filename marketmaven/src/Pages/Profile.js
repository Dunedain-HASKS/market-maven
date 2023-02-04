import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { baseUrl } from "../shared";
export default function Profile() {
  const [data, setData] = useState({
    name: "",
    active_schemes: [],
    email: "",
    funds: 0,
    holdings: 0,
    net_worth: [],
    password: "",
    portfolio: [],
    transactions: [],
    _id: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log(id);
    const baseurl = baseUrl;
    // console.log(baseurl + "user/" + id);
    fetch(baseurl + "user/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: { id },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="row d-flex">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                className="img-fluid rounded-circle"
                src="https://i.pinimg.com/originals/d5/c6/3e/d5c63e1afc63ac6b4b8931a967efe6be.jpg"
                alt="avatar"
                style={{ width: "250px", height: "250px" }}
              />
              <p className="text-muted mt-3">Full Stack Cook</p>
              <p className="text-muted mb-4">
                Funds : {data.funds}
              </p>
              <div className="d-flex justify-content-center mb-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Log Out
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
                  <p className="card-text">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="card-text text-muted">{data.name}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-3">
                  <p className="card-text">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="card-text text-muted">{data.email}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-3">
                  <p className="card-text">Net worth</p>
                </div>
                <div className="col-sm-9">
                  <p className="card-text text-muted">{data.net_worth.length ? (data.net_worth[data.net_worth.length - 1].value): ""}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-3">
                  <p className="card-text">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="card-text text-muted">9662515890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {data ? (
              <>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <div className="card-text mb-4">
                        <p className="card-text mb-4">
                          <span className="text-primary fst-italic me-1">
                            Stocks
                          </span>
                          Portfolio
                        </p>
                        <p className="card-text mb-2">Reliance</p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">ONGC</p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">SBIN </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">HDFC </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">Nifty Bees </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <div
                          className="d-flex justify-content-center mb-1"
                          style={{ marginTop: "30px" }}
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <div className="card-text mb-4">
                        <p className="card-text mb-4">
                          <span className="text-primary fst-italic me-1">
                            Stocks
                          </span>
                          Portfolio
                        </p>
                        <p className="card-text mb-2">Reliance</p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">ONGC</p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%", backgroundColor: "#ba03fc" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">SBIN </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">HDFC </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="card-text mb-2 mt-3">Nifty Bees </p>
                        <div className="progress rounded">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <div
                          className="d-flex justify-content-center mb-1"
                          style={{ marginTop: "30px" }}
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </>
            ) : (
              <p>No Holdings</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
