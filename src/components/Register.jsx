import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="reg">
      <div className="Container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                />
              </div>
              <div className="login__field">
                <input
                  type="password"
                  className="login__input"
                  placeholder="Mot de Passe"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">s'inscrire maintenant</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
            <div className="social-login">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                Déjà membre ?
              </Link>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
