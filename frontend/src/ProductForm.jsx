// src/ProductForm.jsx
import React, { useState, useEffect } from 'react';

function ProductForm({ onProductSaved, productToEdit, cancelEdit }) {
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

    //const url = productToEdit
     // ? 'http://localhost/inventory-system/update.php'
     // : 'http://localhost/inventory-system/add.php';

   const url = productToEdit
      ? 'https://phpcrudonreact.infinityfreeapp.com/inventory-system/update.php'
      : 'https://phpcrudonreact.infinityfreeapp.com/inventory-system/add.php';

    const bodyData = productToEdit
      ? { id: productToEdit.id, name, quantity, price }
      : { name, quantity, price };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || 'Success');
        setName('');
        setQuantity('');
        setPrice('');
        cancelEdit();
        onProductSaved();
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${productToEdit ? 'editing' : ''}`}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <div className="action-buttons">
        <button type="submit">
          {productToEdit ? 'Update Product' : 'Add Product'}
        </button>
        {productToEdit && (
          <button type="button" onClick={cancelEdit} className="delete-button">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
