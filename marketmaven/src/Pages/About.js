import "../App.css";
import anuj_img from "../Assets/Anuj.JPEG";
import harshal_img from "../Assets/Harshal.JPG";
import keyur_img from "../Assets/Keyur.JPEG";
import shivang_img from "../Assets/Shivang.png";
import soham_img from "../Assets/Soham.JPG";

function About() {
  return (
    <>
      <div className="about-section text-dark d-flex flex-column align-items-center ">
        <div className="">
          <h1 className="display-3">About Us</h1>
          <p><em>
          Life would be much easier if we had the source code.
            </em>
          </p>
        </div>
      </div>
        
        {/* <h2 className="anuj d-flex flex-column align-items-center text-dark">
            Our Team
        </h2> */}

      <div className="row-1">
        <div className="column">
          <div className="card compcard pt-3" style={{width: "450px", marginLeft: "35px"}}>
            <div className="container">
            <img src={anuj_img} style={{width: "175px", height: "175px"}} class="float-end rounded-circle" alt="..."></img>
              <h2>Anuj Contractor</h2>
              <p className="title">Frontend Developer</p>
              <p>We develop what we see</p>
              <p>anu82441@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/anuj-contractor-60bb3222a/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card compcard pt-3" style={{width: "450px", marginLeft: "16px"}}>
            <div className="container">
            <img src={shivang_img} style={{width: "175px", height: "175px"}} class="float-end rounded-circle" alt="..."></img>
              <h2>Shivang Kacha</h2>
              <p className="title">Frontend Developer</p>
              <p>We develope what we see.</p>
              <p>shivangkachasbk9@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/shivang-kacha-1557a3220/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card compcard pt-3" style={{width: "450px"}}>
            <div className="container">
            <img src={keyur_img} style={{width: "175px", height: "175px"}} class="float-end rounded-circle" alt="..."></img>
              <h2>Keyur Govrani</h2>
              <p className="title">Frontend Developer</p>
              <p>We develope what we see.</p>
              <p>keyurgovrani6912@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/keyur-govrani-b94277237/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row-2 mt-4">
      <div className="column">
          <div className="card compcard pt-3" style={{width: "450px", marginLeft: "16px"}}>
            <div className="container">
            <img src={harshal_img} style={{width: "175px", height: "175px"}} class="float-end rounded-circle" alt="..."></img>
              <h2>Harshal Patel</h2>
              <p className="title">Backend Developer</p>
              <p>We develope what we see.</p>
              <p>harshal2804@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/harshal-patel-0b61aa24b"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card compcard pt-3" style={{width: "450px", marginLeft: "8px"}}>
            <div className="container">
            <img src={soham_img} style={{width: "175px", height: "175px"}} class="float-end rounded-circle" alt="..."></img>
              <h2>Soham Viradiya</h2>
              <p className="title">Backend Developer</p>
              <p>We develope what we see.</p>
              <p>sohamviradiya2003@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/soham-viradiya-362635226/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div> 
        </>
        
  );
}

export default About;