import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Content from "./Content";
import Footer from "./Footer";
import { textData } from "./data"; // textData import qilinadi

function App() {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <LanguageSelector changeLanguage={changeLanguage} />
      <Content language={language} textData={textData} />
      <Footer language={language} textData={textData} />
    </div>
  );
}

export default App;
