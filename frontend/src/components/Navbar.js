import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Turtle Neck Tees
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/admin/dashboard" className="hover:text-gray-300">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
