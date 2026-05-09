import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/dashboard`);
      setStats(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-600">{stats?.totalOrders}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Total Products</h3>
          <p className="text-3xl font-bold text-green-600">{stats?.totalProducts}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-purple-600">{stats?.totalUsers}</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-gray-600 text-sm font-semibold">Total Revenue</h3>
          <p className="text-3xl font-bold text-orange-600">${stats?.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}
