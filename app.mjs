import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './auth.mjs';
import cors from 'cors'


const app = express();
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only your frontend domain
    credentials: true,  // Allow credentials (cookies, sessions)
  }));
  
app.use(express.json());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to your React frontend
    res.redirect('http://localhost:3000/dashboard');
  }
);

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});


app.get('/api/user', (req, res) => {
    if (req.isAuthenticated()) {
      // Send user info as response
      res.json(req.user);
     console.log('dkfjldskfjdsl;f', req.user._json.email)
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  });
app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});