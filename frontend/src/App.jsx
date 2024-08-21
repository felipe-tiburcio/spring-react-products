import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(true);

  return (
    <div>
      <h1>Spring-React App</h1>
      <Form buttonVisibility={buttonVisible} />
      <Table />

      {console.log(buttonVisible)}
    </div>
  );
};

export default App;
