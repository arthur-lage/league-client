import "./styles/app.css";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

import CharactersImage from "./assets/characters.jpg"

export function App() {
  return (
    <div className="container">
      <div className="left">
        <img className="logo" src="./assets/logo.png" alt="RIOT GAMES logo" />

        <h1 className="title">Sign in</h1>

        <form>
          <div className="input-wrapper">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <div className="social-login">
            <button className="facebook">
              <BsFacebook />
            </button>
            <button className="google">
              <FcGoogle />
            </button>
            <button className="apple">
              <AiFillApple />
            </button>
          </div>
          <div className="stay-signed-in">
            <input type="checkbox" id="stay-signed-in" />
            <label htmlFor="stay-signed-in">Stay signed in</label>
          </div>

          <button type="submit">LOGIN</button>
        </form>

        <a href="#">CAN'T SIGN IN?</a>
        <a href="#">CREATE ACCOUNT</a>

        <a href="#">V56.0.0</a>
      </div>

      <div className="right">
        <img
          src={CharactersImage}
          alt="Kai'sa, Jayce, Ornn, Taliyah, Pyke in battleI"
        />

        <div className="warning">!</div>

        <div className="user">USER</div>

        <div className="window-ptions">
          <button>-</button>
          <button>x</button>
        </div>
      </div>
    </div>
  );
}
