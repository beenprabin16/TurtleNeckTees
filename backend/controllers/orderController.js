const supabase = require('../config/supabase');

// GET user's orders
exports.getOrders = async (req, res) => {
  try {
    const userId = req.user?.id;
    
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET single order
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST create order
exports.createOrder = async (req, res) => {
  try {
    const { products, total, status } = req.body;
    const userId = req.user?.id;
    
    const { data, error } = await supabase
      .from('orders')
      .insert([{ user_id: userId, products, total, status: status || 'pending' }]);
    
    if (error) throw error;
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT update order
exports.updateOrder = async (req, res) => {
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
