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

  const saveProduct = async () => {
    try {
      if (objProduct.name !== "" && objProduct.brand !== "") {
        const response = await fetch(api, {
          method: "post",
          body: JSON.stringify(objProduct),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        alert("Product saved");
        return;
      }

      alert("Error saving product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        buttonVisibility={buttonVisible}
        typingEvent={onTyping}
        saveProduct={saveProduct}
        productObj={objProduct}
      />
      <Table products={data} />
    </div>
  );
};

export default App;
