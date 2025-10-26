
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  getLogin: (req, res) => {
    res.render('login', { user: req.session.user, error: null });
  },
  postLogin: async (req, res) => {
    const { username, password } = req.body;
    const u = User.findByUsername(username);
    if (!u) return res.status(401).render('login', { user: null, error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, u.passwordHash);
    if (!ok) return res.status(401).render('login', { user: null, error: 'Invalid credentials' });
    req.session.user = { username: u.username };
    res.redirect('/');
  },
  getRegister: (req, res) => {
    res.render('register', { user: req.session.user, error: null });
  },
  postRegister: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).render('register', { user: null, error: 'Username and password required' });
    if (User.findByUsername(username)) return res.status(400).render('register', { user: null, error: 'User already exists' });
    const passwordHash = await bcrypt.hash(password, 10);
    User.create({ username, passwordHash });
    res.redirect('/login');
  },
  logout: (req, res) => {
    req.session.destroy(() => res.redirect('/'));
  },
  requireAuth: (req, res, next) => {
    if (!req.session.user) return res.redirect('/login');
    next();
  }
};
