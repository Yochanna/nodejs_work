
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const auth = require('./controllers/authController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: process.env.SESSION_SECRET || 'dev_secret', resave: false, saveUninitialized: false }));

// Auth routes
app.get('/login', auth.getLogin);
app.post('/login', auth.postLogin);
app.get('/register', auth.getRegister);
app.post('/register', auth.postRegister);
app.post('/logout', auth.logout);

// Example protected route
app.get('/dashboard', auth.requireAuth, (req,res)=>{
  res.render('login', { user: req.session.user, error: null });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
