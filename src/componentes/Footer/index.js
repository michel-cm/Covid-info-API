import React from "react";

function Footer(props) {
  return (
    <footer className="bg-dark py-4 text-white-50">
      <div className="container text-center">
        <small> {props.titleFooter} </small>
      </div>
    </footer>
  );
}

export default Footer;
