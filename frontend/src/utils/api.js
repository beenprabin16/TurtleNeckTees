import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Product endpoints
export const productAPI = {
  getAll: () => API.get('/products'),
  getById: (id) => API.get(`/products/${id}`),
  create: (data) => API.post('/products', data),
  update: (id, data) => API.put(`/products/${id}`, data),
  delete: (id) => API.delete(`/products/${id}`)
};

// Order endpoints
export const orderAPI = {
  getAll: () => API.get('/orders'),
  getById: (id) => API.get(`/orders/${id}`),
  create: (data) => API.post('/orders', data),
  update: (id, data) => API.put(`/orders/${id}`, data)
};

// Auth endpoints
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  logout: () => API.post('/auth/logout')
};

// Payment endpoints
export const paymentAPI = {
  initiateEsewa: (data) => API.post('/payments/esewa/initiate', data),
  verifyEsewa: (data) => API.post('/payments/esewa/verify', data),
  initiateKhalti: (data) => API.post('/payments/khalti/initiate', data),
  verifyKhalti: (data) => API.post('/payments/khalti/verify', data)
};

// Admin endpoints
export const adminAPI = {
  getDashboard: () => API.get('/admin/dashboard'),
  getAllOrders: () => API.get('/admin/orders'),
  updateOrderStatus: (id, status) => API.put(`/admin/orders/${id}/status`, { status }),
  updateInventory: (productId, stock) => API.put(`/admin/inventory/${productId}`, { stock })
};

export default API;
