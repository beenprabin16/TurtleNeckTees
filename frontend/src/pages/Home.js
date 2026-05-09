import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Turtle Neck Tees</h1>
        <p className="text-xl text-gray-400 mb-8">Built to Last. Worn with Intent.</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold">
          Shop Now
        </button>
      </section>
    </div>
  );
}
