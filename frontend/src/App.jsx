// src/App.jsx
import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = () => {
    fetch('http://localhost/inventory-system/read.php')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching:', err));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    fetch('http://localhost/inventory-system/delete.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => fetchProducts())
      .catch((err) => console.error('Error deleting:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>📦 Inventory System</h1>

      <ProductForm

        onProductSaved={fetchProducts}
        productToEdit={editingProduct}
        cancelEdit={() => setEditingProduct(null)}
      />
      <input
  type="text"
  className="search-input"
  placeholder="Search product..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {products
  .filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((p) => (
    <tr key={p.id}>
      <td>{p.name}</td>
      <td>{p.quantity}</td>
      <td>₱{p.price}</td>
      <td className="action-buttons">
        <button className="edit-button" onClick={() => setEditingProduct(p)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => handleDelete(p.id)}>
          Delete
        </button>
      </td>
    </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
