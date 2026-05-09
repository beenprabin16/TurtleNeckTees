import React, { useState } from 'react';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Handle product creation
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Manage Products</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {showForm && (
        <div className="mb-10 bg-gray-100 p-6 rounded-lg">
          <form onSubmit={handleAddProduct}>
            <input type="text" placeholder="Product Name" className="w-full mb-4 p-2 border rounded" />
            <textarea placeholder="Description" className="w-full mb-4 p-2 border rounded"></textarea>
            <input type="number" placeholder="Price" className="w-full mb-4 p-2 border rounded" />
            <input type="number" placeholder="Stock" className="w-full mb-4 p-2 border rounded" />
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Stock</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">No products yet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
