import React from "react";

function Header() {
  return (
    <header className="p-5 bg-light text-black">
      <div className="container">
        <h1 className="display-4 fw-bold">
          {" "}
          Sistema de informação sobre Covid-19{" "}
        </h1>
        <p className="lead fs-4">
          {" "}
          Lista de casos e mortes no Brasil por estado{" "}
        </p>
      </div>
    </header>
  );
}

export default Header;
