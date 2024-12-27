import React from "react";

function LanguageSelector({ changeLanguage }) {
  return (
    <div>
      <h2>Select Language</h2>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
