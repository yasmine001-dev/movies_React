import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

function ProductList({ products, setProducts }) {
  const [editId, setEditId] = useState(null);

  const [editValues, setEditValues] = useState({});

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditValues({ ...product });
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditValues({
      ...editValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    setProducts(
      products.map((p) => (p.id === editId ? editValues : p))
    );
    setEditId(null);
  };

  return (
    <div className="container mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Free Shipping</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>

              {editId === product.id ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      name="name"
                      value={editValues.name || ""} // Controlled
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="price"
                      value={editValues.price || ""}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={editValues.quantity || ""}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="category"
                      value={editValues.category || ""}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      name="shipping"
                      checked={editValues.shipping || false}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button variant="success" size="sm" onClick={handleSave}>
                        Save
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => setEditId(null)}>
                        Cancel
                      </Button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    {product.shipping ? (
                      <Badge bg="success">Free</Badge>
                    ) : (
                      <Badge bg="danger">Paid</Badge>
                    )}
                  </td>
                  <td>
                    <div className="d-flex gap-2 fs-4">
                      <MdDeleteForever
                        color="red"
                        onClick={() => handleDelete(product.id)}
                        style={{ cursor: "pointer" }}
                        title="Delete"
                      />
                      <MdEditSquare
                        color="#0d6efd"
                        onClick={() => handleEdit(product)} 
                        style={{ cursor: "pointer" }}
                        title="Edit"
                      />
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;