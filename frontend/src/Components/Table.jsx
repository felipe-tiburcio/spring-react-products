const Table = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Select</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>
              <button className="btn btn-success">Select</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
