const supabase = require('../config/supabase');

// GET dashboard stats
exports.getDashboard = async (req, res) => {
  try {
    // Get total orders
    const { data: orders } = await supabase
      .from('orders')
      .select('*');
    
    // Get total products
    const { data: products } = await supabase
      .from('products')
      .select('*');
    
    // Get total users
    const { data: users } = await supabase
      .from('users')
      .select('*');
    
    res.json({
      success: true,
      data: {
        totalOrders: orders?.length || 0,
        totalProducts: products?.length || 0,
        totalUsers: users?.length || 0,
        totalRevenue: orders?.reduce((sum, order) => sum + order.total, 0) || 0
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all orders
exports.getAllOrders = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*');
    
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id);
    
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT update inventory
exports.updateInventory = async (req, res) => {
  try {
    const { productId } = req.params;
    const { stock } = req.body;
    
    const { data, error } = await supabase
      .from('products')
      .update({ stock })
      .eq('id', productId);
    
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
