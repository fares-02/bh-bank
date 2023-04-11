import Carousel from "react-bootstrap/Carousel";
import carr1 from "./images/carr1.jpg";
import carr2 from "./images/carr2.png";
import carr3 from "./images/carr3.jpg";

function Home() {
  return (
    <div className="carr">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carr1}
            alt="First slide"
            style={{ width: "200px", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carr2}
            alt="Second slide"
            style={{ width: "200px", height: "400px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carr3}
            alt="Third slide"
            style={{ width: "200px", height: "400px" }}
          />
        </Carousel.Item>
      </Carousel>
      <h1 style={{ margin: "5%", color: "grey" }}>
        Agence BH Bank Boumhal vous souhaite la bienvenue
      </h1>
      <p>
        Cette application réservée seulement pour les clients de cette agence.
      </p>
    </div>
  );
}

export default Home;
