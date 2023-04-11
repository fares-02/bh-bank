import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Contacts.css";
import anonman from "./images/anonman.jpg";
import anonwoman from "./images/anonwoman.jpg";

function Contacts() {
  return (
    <div className="contacts">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={anonwoman} />
        <Card.Body>
          <Card.Title>Tahani Torkhani</Card.Title>
          <Card.Text>
            <h4>Chef d'agence</h4> <p>Tahani@bhbank.tn</p>
          </Card.Text>
          <Button variant="danger">Contacter</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={anonwoman} />
        <Card.Body>
          <Card.Title>Houdayna</Card.Title>
          <Card.Text>
            <h4>Responsable commercial</h4> <p>Houdayna@bhbank.tn</p>
          </Card.Text>
          <Button variant="danger">Contacter</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={anonwoman} />
        <Card.Body>
          <Card.Title>Sihem</Card.Title>
          <Card.Text>
            <h4>Conseiller clientèle</h4> <p>sihem@bhbank.tn</p>
          </Card.Text>
          <Button variant="danger">Contacter</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={anonman} />
        <Card.Body>
          <Card.Title>Karim Ben Rhouma</Card.Title>
          <Card.Text>
            <h4>chargé de la caisse</h4> <p>karim@bhbank.tn</p>
          </Card.Text>
          <Button variant="danger">Contacter</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contacts;
