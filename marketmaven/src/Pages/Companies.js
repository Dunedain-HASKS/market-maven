/* eslint-disable jsx-a11y/alt-text */
// import data from "../Data/companies.json";
// import imgs from "../Assets/complogo.js";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loading } from "../Components/Loading";
const Companies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const res = axios
      .get(`https://azathoth.onrender.com/companies`)
      .then((res) => {
        console.log(res.data.data);
        setCompanies(res.data.data);
        setIsLoading(false);
      });
  });

  return (
    <div className="container-fluid mt-2">
      <div className="justify-content-start row row-cols-1 bg-light row-cols-md-3 g-1 p-2">
        { isLoading ? <Loading />
          : companies.map((comp, index) => (
              <div
                className="col"
                key={index}
                style={{
                  marginBottom: "25px",
                }}
              >
                <div
                  className="card compcard bg-blur text-start bg-light m-2 p-5"
                  style={{ minHeight: "500px" }}
                >
                  <div className="card-body">
                    <img src={comp.logo} style={{width: "130px", height: "100px", marginBottom: "10px"}} />
                    <h5 className="card-title display-6" style={{height: "150px"}}>{comp.name}</h5>
                    <h5 className=" compinfo" style={{ color: "green" }}>
                      {comp.sector}
                    </h5>
                    <h5
                      className="comptick rounded-3"
                      style={{ color: "purple" }}
                    >
                      ${comp.ticker}
                    </h5>
                    <Button
                      onClick={() => {
                        navigate(`/companies/${comp._id}`);
                      }}
                      size="medium"
                      variant="contained"
                      style={{
                        marginTop: "40px",
                        color: "white",
                        fontFamily: "Montserrat",
                      }}
                    >
                      More Info
                    </Button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Companies;
