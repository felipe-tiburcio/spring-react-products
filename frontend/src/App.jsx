import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [data, setData] = useState([]);
  const api = "http://localhost:8080/products";

  // useEffect(() => {
  //   fetch(api)
  //     .then((ret) => ret.json())
  //     .then((retConv) => setData(retConv));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <h1>Spring-React App</h1>
      <Form buttonVisibility={buttonVisible} />
      <Table />
    </div>
  );
};

export default App;
