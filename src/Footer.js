import React from "react";

function Footer({ language, textData }) {
  return (
    <div>
      <p>{textData[language].footer}</p>{" "}
      {/* textData orqali tilga mos footer matni */}
    </div>
  );
}

export default Footer;
