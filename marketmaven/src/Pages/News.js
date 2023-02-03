import { Container } from "@mui/system";
import data from "../Data/news.json";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { shadows } from "@mui/system";

const News = () => {
  return (
    <>
      <Container align="center">
        {data.news.map((item, index) => (
          <Card
            style={{
              maxWidth: "60vw",
              marginTop: "30px",
              boxShadow: "5px 10px 5px lightgrey",
            }}
          >
            <CardHeader title={item.headline} />
            <div key={index}>
              <p>
                <span style={{ marginRight: "30px" }}>
                  Category: {item.category}
                </span>
                <span>Source:{item.source}</span>
              </p>
              <p>{item.summary}</p>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default News;
