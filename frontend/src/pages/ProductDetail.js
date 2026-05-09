import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1>Product Detail - {id}</h1>
      <p>Product details will be displayed here</p>
    </div>
  );
}
