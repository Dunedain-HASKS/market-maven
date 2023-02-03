import data from "../Data/companies.json";
import imgs from "../Assets/complogo.js";
import Button from "@mui/material/Button";

const Companies = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="justify-content-start row row-cols-1 bg-light row-cols-md-3 g-1 p-2">
        {data.companies.map((comp, index) => (
          <div className="col" key={index} style={{ marginBottom: "25px" }}>
            <div className="card compcard bg-blur text-start bg-light m-2 p-5">
              {/* <img
                src={comp.image}
                className="card-img-top w-100"
                style={{ height: "300px" }}
                alt={comp.name}
              /> */}
              <div className="card-body">
                <img src={imgs[comp.name]} width="130px" height="100px" />
                <h5 className="card-title display-6">{comp.name}</h5>
                {/* <h6 className="card-text display-6">Country: {comp.country}</h6> */}
                {/* <h6 className="card-text">Ipo release: {comp.ipo}</h6> */}
                <h5 className=" compinfo" style={{ color: "green" }}>
                  {comp.sector}
                </h5>
                {/* <h6 className="card-text">
                  Company subsector: {comp.subsector}
                </h6> */}
                <h5 className="comptick rounded-3" style={{ color: "purple" }}>
                  ${comp.ticker}
                </h5>

                {/* <h6
                  className="card-text"
                  style={{ height: "175px", marginTop: "5px" }}
                >
                  Description: <p>{comp.description.substring(0, 350)}...</p>
                </h6> */}

                {/* <a className="btn btn-primary" href={comp.weburl} target="_blank">
                  More
                </a> */}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
