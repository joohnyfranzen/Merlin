import React, { useState } from "react";
import "./LoggedNavbar.css";
import Navigation1 from "./Navigation1/Navigation1";
import Navigation2 from "./Navigation2/Navigation2";
import Navigation3 from "./Navigation3/Navigation3";
import { BiBookContent, BiUser, BiWrench } from "react-icons/bi";
export default function Navbar() {
  const [showNav1, setShowNav1] = useState(false);
  const [showNav2, setShowNav2] = useState(false);
  const [showNav3, setShowNav3] = useState(false);

  return (
    <div>
      <nav>
        <div className="logged-navbar">
          <button>
            <img src="merlin-logo.png" alt="Witch Hat" />
          </button>
          <div className="icons">
            <button
              onClick={() => {
                if (!showNav1) {
                  setShowNav1(true);
                  setShowNav2(false);
                  setShowNav3(false);
                } else {
                  setShowNav1(false);
                }
              }}
            >
              <BiBookContent size={24} className="icon" />
            </button>
            <button
              onClick={() => {
                if (!showNav2) {
                  setShowNav2(true);
                  setShowNav1(false);
                  setShowNav3(false);
                } else {
                  setShowNav2(false);
                }
              }}
            >
              <BiUser size={24} className="icon" />
            </button>
            <button
              onClick={() => {
                if (!showNav3) {
                  setShowNav3(true);
                  setShowNav1(false);
                  setShowNav2(false);
                } else {
                  setShowNav3(false);
                }
              }}
            >
              <BiWrench size={24} className="icon" />
            </button>
          </div>
          {showNav1 ? <Navigation1 /> : <></>}
          {showNav2 ? <Navigation2 /> : <></>}
          {showNav3 ? <Navigation3 /> : <></>}
        </div>
      </nav>
    </div>
  );
}
