import React from "react";

function Content({ language, textData }) {
  return (
    <div>
      <h3>{textData[language].greeting}</h3> {/* textData orqali tilga mos matn */}
    </div>
  );
}

export default Content;
