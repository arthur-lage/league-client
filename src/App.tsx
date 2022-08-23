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
    <div className="container">
      <div className="left">
        <img className="logo" src={RiotGamesLogo} alt="RIOT GAMES logo" />

        <h1 className="title">Sign in</h1>

        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="username"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
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
          <div className="stay-signed-in">
            <input type="checkbox" id="stay-signed-in" />
            <label htmlFor="stay-signed-in">Stay signed in</label>
          </div>

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
  );
}
