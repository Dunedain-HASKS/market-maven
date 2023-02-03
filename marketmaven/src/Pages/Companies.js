import data from "../data/companies.json";
import imgs from "../Assets/complogo.js";

const Companies = () => {
  return (
    <>
      <div className="justify-content-start row row-cols-1 bg-dark row-cols-md-3 g-1 m-0 p-0">
        {data.companies.map((comp, index) => (
          <div className="col" key={index}>
            <div className="card compcard w-100 h-100 bg-blur text-start bg-dark text-white m-2 p-5">
              {/* <img
                src={comp.image}
                className="card-img-top w-100"
                style={{ height: "300px" }}
                alt={comp.name}
              /> */}
              <div className="card-body">
                <img src={imgs[comp.name]} width="50px" height="50px" />
                <h5 className="card-title display-6">{comp.name}</h5>
                {/* <h6 className="card-text display-6">Country: {comp.country}</h6> */}
                {/* <h6 className="card-text">Ipo release: {comp.ipo}</h6> */}
                <h5 className=" compinfo">{comp.sector}</h5>
                {/* <h6 className="card-text">
                  Company subsector: {comp.subsector}
                </h6> */}
                <h5 className="comptick rounded-3">${comp.ticker}</h5>

                {/* <h6
                  className="card-text"
                  style={{ height: "175px", marginTop: "5px" }}
                >
                  Description: <p>{comp.description.substring(0, 350)}...</p>
                </h6> */}

                <a className="btn btn-info" href={comp.weburl} target="_blank">
                  More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Companies;
