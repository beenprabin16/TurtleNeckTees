import React from 'react';

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          {/* Form will go here */}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* Summary will go here */}
        </div>
      </div>
    </div>
  );
}
