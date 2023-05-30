import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";

const Popup = () => {
  const openSetting = () => {
    const optionsURL = chrome.runtime.getURL("src/pages/options/index.html");
    chrome.tabs.create({ url: optionsURL });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
      <button onClick={(event) => openSetting()}>open setting</button>
    </div>
  );
};

export default Popup;
