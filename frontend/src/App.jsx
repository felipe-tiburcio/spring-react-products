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
        await axios.post(api, objProduct);

        alert("Product Saved");

        return;
      }

      alert("Error saving product");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async () => {
    try {
      if (objProduct.name !== "" && objProduct.brand !== "") {
        axios.put(`${api}/${objProduct.id}`, objProduct);

        alert("Product Updated");

        return;
      }

      alert("Error updating product");
    } catch (error) {
      console.log(error);
    }
  };

  const cleanForm = () => {
    setObjProduct(product);
    setSaveButtonVisible(true);
    window.location.reload();
  };

  const selectProduct = (index) => {
    setObjProduct(products[index]);
    setSaveButtonVisible(false);
  };

  const deleteProduct = async () => {
    try {
      axios.delete(`${api}/${objProduct.id}`);

      alert("Product removed");
      cleanForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        buttonVisibility={saveButtonVisible}
        typingEvent={onTyping}
        saveProduct={saveProduct}
        updateProduct={updateProduct}
        productObj={objProduct}
        cleanForm={cleanForm}
        deleteProduct={deleteProduct}
      />
      <Table products={products} selectProduct={selectProduct} />
    </div>
  );
};

export default App;
