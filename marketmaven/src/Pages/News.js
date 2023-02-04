import { Container } from "@mui/system";
import data from "../Data/news.json";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { shadows } from "@mui/system";
import Axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import '@fontsource/montserrat';
import '@fontsource/lato';

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews().then(
      (news) => {
        setNews(news);
        setIsLoading(false)
      });
  }, []);

  return (
    <>{isLoading ? (<div>Loading</div>) :

      (<>
        <Container align="center">
          {news.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  maxWidth: "60vw",
                  minHeight: "200px",
                  marginTop: "30px",
                  boxShadow: "5px 10px 5px lightgrey",
                }}
                className="compcard card p-4"
              >
                {/* <CardHeader title= style={{fontFamily: "Roboto", fontSize: "100px"}}/> */}
                <h5 class="card-title" style={{fontFamily: "Lato", fontSize: "35px"}}>{item.headline}</h5>

                <div>
                  <p style={{fontFamily: "Monserrat", fontSize: "15px"}}>
                    <span style={{ marginRight: "30px" }}>
                      Category: {item.category}
                    </span>
                    <span>Source:{item.source}</span>
                  </p>
                  <p style={{fontFamily: "Monserrat", fontSize: "20px"}}>{item.summary}</p>
                  <a href={item.url} target="_blank">
                  <Button
                    size="medium"
                    variant="contained"
                    style={{
                      marginTop: "10px",
                      color: "white",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Read More
                  </Button>
                  </a>
                </div>
                {/* <img src={item.image} style={{ width: "200px", height: "200px", marginTop: "10px" }} alt="img"/> */}
                {/* <img id="currentPhoto" src={item.image} onerror="this.onerror=null; this.src='https://media.istockphoto.com/id/458650983/photo/financial-newspapers-on-a-newsstand.jpg?s=612x612&w=0&k=20&c=axPQH7JmSkL2HD0SZQPOTJ0QKzazL_yknRN5cW-zMZI='" style={{ width: "200px", height: "200px", marginTop: "10px" }} alt="img" /> */}
              </div>
            </div>
          ))}
        </Container>
      </>
      )
    }
    </>

  );

};

const fetchNews = async () => {
  return await Axios.get(`https://azathoth.onrender.com/news`)
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default News;
