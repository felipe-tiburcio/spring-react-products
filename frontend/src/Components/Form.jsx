const Form = () => {
  return (
    <form action="">
      <input className="form-control" placeholder="Name" />
      <input className="form-control" placeholder="Brand" />

      <button className="btn btn-primary">Save</button>
      <button className="btn btn-warning">Edit</button>
      <button className="btn btn-danger">Delete</button>
      <button className="btn btn-secondary">Cancel</button>
    </form>
  );
};

export default Form;
