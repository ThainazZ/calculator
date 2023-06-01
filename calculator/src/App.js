import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad"></div>
      </div>
    </>
  );
};

export default App;
