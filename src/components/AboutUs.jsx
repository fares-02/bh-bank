import React from "react";
import fb from "./images/fb.png";
import insta from "./images/insta.png";
import linkedin from "./images/linkedin.png";
import yt from "./images/youtube.png";

const AboutUs = () => {
  return (
    <div style={{ margin: "5%" }}>
      <h3 style={{ color: "#E2011B" }}>Agence BOUMHAL</h3>
      <p>Adresse: Avenue de l'environnement Boumhal, Ben Arous 2097</p>
      <p>Tél: 71 127 390</p>
      <p>Adresse E-mail: ag.boumhel@bhbank.tn</p>
      <a
        style={{ textDecoration: "none" }}
        href="https://www.google.com/maps/?q=36.729889,10.308593&z=600"
        target="_blank"
      >
        Google Maps
      </a>
      <div style={{ margin: "1%" }}>
        <a
          style={{ margin: "1%" }}
          target="_blank"
          href="https://www.facebook.com/BHBank"
        >
          <img src={fb} alt="fb" width="30px" />
        </a>
        <a
          style={{ margin: "1%" }}
          target="_blank"
          href="https://www.instagram.com/bh_bank"
        >
          <img src={insta} alt="insta" width="30px" />
        </a>
        <a
          style={{ margin: "1%" }}
          target="_blank"
          href="https://www.linkedin.com/company/bh-bank"
        >
          <img src={linkedin} alt="linkedin" width="30px" />
        </a>
        <a
          style={{ margin: "1%" }}
          target="_blank"
          href="https://www.youtube.com/channel/UCRw2rFa-9RhCg7Mq1q4Q7Sg?view_as=subscriber "
        >
          <img src={yt} alt="yt" width="30px" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
