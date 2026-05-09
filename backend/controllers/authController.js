const supabase = require('../config/supabase');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST register user
exports.registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword, name }]);
    
    if (error) throw error;
    
    res.status(201).json({ success: true, message: 'User registered' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email);
    
    if (error || users.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });
    
    res.json({ success: true, token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST logout
exports.logoutUser = (req, res) => {
  res.json({ success: true, message: 'Logged out' });
};
