//ProductForm.jsx

import React, { useState, useEffect } from 'react';

function ProductForm({ onSave, productToEdit, onCancel }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setQuantity(productToEdit.quantity);
      setPrice(productToEdit.price);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity || !price) {
      alert("Please fill in all fields.");
      return;
    }

    const productData = {
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    if (productToEdit) {
      productData.id = productToEdit.id;
    }

    onSave(productData);
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productToEdit ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      /><br />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br />
      <button type="submit">{productToEdit ? 'Update' : 'Add'}</button>
      {productToEdit && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ProductForm;
