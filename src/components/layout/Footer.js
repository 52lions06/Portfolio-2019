import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../../assests/documents/William_McKelvey_Developer*.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href={Pdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="btn"> My Resume</button>
      </a>
      <Link to="/contact">
        <button className="btn"> Contact Me</button>
      </Link>
    </div>
  );
};

export default Footer;
