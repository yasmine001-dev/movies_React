import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductForm({ products, setProducts }) {
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    shipping: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValue({
      ...formValue,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.name || !formValue.price) {
      alert("Name and Price are required!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...formValue,
    };

    setProducts([...products, newProduct]);

    setFormValue({
      name: "",
      price: "",
      quantity: "",
      category: "",
      shipping: false,
    });
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={formValue.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter Product Price"
            value={formValue.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductQuantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            min="1"
            placeholder="Quantity"
            value={formValue.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Category"
            value={formValue.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductShipping">
          <Form.Check
            type="checkbox"
            name="shipping"
            label="Free Shipping"
            checked={formValue.shipping}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New Product
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
