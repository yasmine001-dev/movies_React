import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductForm({ products, setProducts }) {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const categoryRef = useRef();
  const shippingRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const category = categoryRef.current.value;
    const shipping = shippingRef.current.checked;

    if (!name || !price) {
      alert("Name and Price are required!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price,
      quantity,
      category,
      shipping,
    };

    setProducts([...products, newProduct]);

    nameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
    categoryRef.current.value = "";
    shippingRef.current.checked = false;
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            ref={nameRef} //Uncontrolled
            placeholder="Enter Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            ref={priceRef}
            placeholder="Enter Product Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductQuantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            ref={quantityRef}
            placeholder="Quantity"
            min="1"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control type="text" ref={categoryRef} placeholder="Category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductShipping">
          <Form.Check type="checkbox" ref={shippingRef} label="Free Shipping" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New Product
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
