import React from "react";

const Footer = (props) => {
  return (
    <p className="footer">
      Made with <strong>{props.method}</strong> at{" "}
      <strong>{props.school} </strong>by <strong>{props.name}</strong>
    </p>
  );
};
export default Footer;
