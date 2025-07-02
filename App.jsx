//App.jsx
import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const API_BASE = 'http://localhost/inventory-api';

  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE}/read.php`);
    const data = await res.json();
    setProducts(data);
  };

  const saveProduct = async (product) => {
    const url = product.id ? 'update.php' : 'add.php';

    await fetch(`${API_BASE}/${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

    setEditingProduct(null);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;

    await fetch(`${API_BASE}/delete.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });

    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Inventory System</h1>
      <ProductForm
        onSave={saveProduct}
        productToEdit={editingProduct}
        onCancel={() => setEditingProduct(null)}
      />

      <h2>Products</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Quantity</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
              <td>
                <button onClick={() => setEditingProduct(prod)}>Edit</button>
                <button onClick={() => deleteProduct(prod.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
