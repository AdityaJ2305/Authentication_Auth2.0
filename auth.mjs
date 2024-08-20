import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(new GoogleStrategy({
  clientID: '45510636816-u86tud3bnvin4fkcqp9fq8v2361lt8t1.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:5001/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Handle user data (e.g., save to database)
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});