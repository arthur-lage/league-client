import "./styles/app.css";

import {
  BsArrowRight,
  BsDash,
  BsExclamation,
  BsFacebook,
  BsPersonFill,
  BsX,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

import CharactersImage from "./assets/characters.jpg";
import RiotGamesLogo from "./assets/logo.png";
import { FormEvent, useEffect, useState } from "react";

export function App() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (name.length > 1 && password.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, password]);

  function handleForm(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <img className="logo" src={RiotGamesLogo} alt="RIOT GAMES logo" />

          <h1 className="title">Sign in</h1>

          <form onSubmit={handleForm}>
            <div className="input-wrapper">
              <div className="input-field">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder=" "
                  id="username"
                  className="form__input"
                />
                <label className="form__label" htmlFor="username">
                  Username
                </label>
              </div>
              <div className="input-field">
                <input
                  value={password}
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="form__input"
                />
                <label className="form__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>

            <div className="social-login">
              <button className="facebook">
                <BsFacebook size={16} color="#fff" />
              </button>
              <button className="google">
                <FcGoogle size={16} />
              </button>
              <button className="apple">
                <AiFillApple color="#fff" size={16} />
              </button>
            </div>
            <label className="stay-signed-in">
              <span>Stay signed in</span>
              <input type="checkbox" id="stay-signed-in" />
              <span className="checkmark"></span>
            </label>

            <div className="submit-form-wrapper">
              <button
                className={`submit-form ${isFormValid ? "valid" : ""}`}
                type="submit"
              >
                <BsArrowRight size={36} />
              </button>
            </div>
          </form>

          <div className="other-links">
            <a className="cant-sign-in" href="#">
              CAN'T SIGN IN?
            </a>
            <a className="create-account" href="#">
              CREATE ACCOUNT
            </a>

            <a className="version" href="#">
              V56.0.0
            </a>
          </div>
        </div>

        <div className="right">
          <img
            className="characters"
            src={CharactersImage}
            alt="Kai'sa, Jayce, Ornn, Taliyah, Pyke in battleI"
          />

          <div className="warning-wrapper">
            <div className="warning">
              <BsExclamation color="#111" size={40} />
            </div>
          </div>

          <button className="user-wrapper">
            <BsPersonFill size={32} />
          </button>

          <div className="window-options">
            <button className="minimize">
              <BsDash size={20} />
            </button>
            <button className="close">
              <BsX size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="invalid-screen-size">
        <h2>Sorry!</h2>
        <p>
          This website is not available to your screensize. Minimun screen
          width: 550px
        </p>
      </div>
    </>
  );
}
