import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const product = {
    id: "",
    name: "",
    brand: "",
  };

  const [buttonVisible, setButtonVisible] = useState(true);
  const [data, setData] = useState([]);
  const [objProduct, setObjProduct] = useState(product);
  const api = "http://localhost:8080/products";

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

  const onTyping = (e) => {
    const { name, value } = e.target;
    setObjProduct({ ...objProduct, [name]: value });
  };

  return (
    <div>
      <p>{JSON.stringify(objProduct)}</p>
      <Form buttonVisibility={buttonVisible} typingEvent={onTyping} />
      <Table products={data} />
    </div>
  );
};

export default App;
