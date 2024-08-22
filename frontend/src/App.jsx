import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import axios from "axios";

const App = () => {
  const product = {
    id: "",
    name: "",
    brand: "",
  };

  const [saveButtonVisible, setSaveButtonVisible] = useState(true);
  const [products, setProducts] = useState([]);
  const [objProduct, setObjProduct] = useState(product);
  const api = "http://localhost:8080/products";

  useEffect(() => {
    const fetchData = () => {
      try {
        axios.get(api).then((response) => {
          setProducts(response.data);
        });
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
        axios.post(api, objProduct);

        alert("Product Saved");

        return;
      }

      alert("Error saving product");
    } catch (error) {
      console.log(error);
    }
  };

  const cleanForm = (e) => {
    e.preventDefault();

    setObjProduct(product);
    setSaveButtonVisible(true);
  };

  const selectProduct = (index) => {
    setObjProduct(products[index]);
    setSaveButtonVisible(false);
  };

  return (
    <div>
      <Form
        buttonVisibility={saveButtonVisible}
        typingEvent={onTyping}
        saveProduct={saveProduct}
        productObj={objProduct}
        cleanForm={cleanForm}
      />
      <Table products={products} selectProduct={selectProduct} />
    </div>
  );
};

export default App;
