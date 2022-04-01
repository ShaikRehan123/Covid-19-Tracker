import React from "react";
const Footer = ({ msg, font, name, by }) => {
  return (
    <footer className={`${font} border-top`}>
      <div className="container">
        <p className="lead text-center mb-0 p-4">
          {msg} {by} <i className="fas heart fa-heart mx-2"></i> {name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
