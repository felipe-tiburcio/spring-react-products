const Form = ({ buttonVisibility, typingEvent, saveProduct, productObj }) => {
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
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      )}
    </form>
  );
};

export default Form;
