import data from "../Data/companies.json";
import imgs from "../Assets/complogo.js";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Company from "./Company";


const Companies = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="justify-content-start row row-cols-1 bg-light row-cols-md-3 g-1 p-2">
        {data.companies.map((comp, index) => (
          <div className="col" key={index} style={{ marginBottom: "25px" }}>
            <div className="card compcard bg-blur text-start bg-light m-2 p-5">
              <div className="card-body">
                <img src={imgs[comp.name]} width="130px" height="100px" />
                <h5 className="card-title display-6">{comp.name}</h5>
                <h5 className=" compinfo" style={{ color: "green" }}>
                  {comp.sector}
                </h5>
                <h5 className="comptick rounded-3" style={{ color: "purple" }}>
                  ${comp.ticker}
                </h5>
                <Link to={`/companies/${Company._id}`}>
                  <Button
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
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
