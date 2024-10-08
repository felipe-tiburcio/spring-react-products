const Form = ({
  buttonVisibility,
  typingEvent,
  saveProduct,
  updateProduct,
  productObj,
  cleanForm,
  deleteProduct,
}) => {
  return (
    <form action="post">
      <input
        onChange={typingEvent}
        name="name"
        className="form-control"
        placeholder="Name"
        value={productObj.name}
      />
      <input
        onChange={typingEvent}
        name="brand"
        className="form-control"
        placeholder="Brand"
        value={productObj.brand}
      />

      {buttonVisibility ? (
        <button className="btn btn-primary" onClick={saveProduct}>
          Save
        </button>
      ) : (
        <div>
          <button onClick={updateProduct} className="btn btn-warning">
            Update
          </button>
          <button onClick={deleteProduct} className="btn btn-danger">
            Delete
          </button>
          <button onClick={cleanForm} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
