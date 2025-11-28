import React, { useState, useEffect } from "react";
import '../css/PasswordGuard.css';
import LogoGreen from '@site/static/img/zimble-logo_green.ab021e92.png';

// 1) FIRST GUARD 
export default function PasswordGuard({ children }) {
  const CORRECT_PASSWORD = "ZimbleU!2025"; 
  const STORAGE_KEY = "userguide_access_1";

  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);

  
  useEffect(() => {
    const toc = document.querySelector(".table-of-contents.table-of-contents__left-border");

    if (!authorized) {
      if (toc) toc.style.display = "none";
    } else {
      if (toc) toc.style.display = "";
    }
  }, [authorized]);

  const checkPassword = () => {
    if (input === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <div className="password-block">
        <img className="password-heading" src={LogoGreen} alt="Zimble Logo" />
        <p className="password-description">This page is password protected.</p>

        <input
          type="password"
          className="password-input"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="password-button" onClick={checkPassword}>
          Unlock
        </button>
      </div>
    );
  }

  return children;
}



// 2) SECOND GUARD 
export function MainPasswordGuard({ children }) {
  const CORRECT_PASSWORD = "ZimbleDocs@777"; 
  const STORAGE_KEY = "userguide_access_2";

  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);

  // ⭐ SAME TOC CONTROL FOR SECOND GUARD
  useEffect(() => {
    const toc = document.querySelector(".table-of-contents.table-of-contents__left-border");

    if (!authorized) {
      if (toc) toc.style.display = "none";
    } else {
      if (toc) toc.style.display = "";
    }
  }, [authorized]);

  const checkPassword = () => {
    if (input === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <div className="password-block">
        <img className="password-heading" src={LogoGreen} alt="Zimble Logo" />
        <p className="password-description">This page is password protected.</p>

        <input
          type="password"
          className="password-input"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="password-button" onClick={checkPassword}>
          Unlock
        </button>
      </div>
    );
  }

  return children;
}
