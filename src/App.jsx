import "bootstrap/dist/css/bootstrap.min.css";
// on terminal ---> npm i bootstrap
import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";

import React from "react";

const App = () => {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="container mt-3">
      <div className="card shadow">
        <h5 className="card-header">APP</h5>
        <div className="card-body">
          <Form boxes={boxes} setBoxes={setBoxes} />
          {/* makes it available on Form component */}
          <Display boxes={boxes} />
          {/* makes it available on Display component */}
        </div>
      </div>
    </div>
  );
};

export default App;
