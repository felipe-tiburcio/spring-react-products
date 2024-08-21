const Form = ({ buttonVisibility, typingEvent }) => {
  return (
    <form action="">
      <input
        onChange={typingEvent}
        name="name"
        className="form-control"
        placeholder="Name"
      />
      <input
        onChange={typingEvent}
        name="brand"
        className="form-control"
        placeholder="Brand"
      />

      {buttonVisibility ? (
        <button className="btn btn-primary">Save</button>
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
