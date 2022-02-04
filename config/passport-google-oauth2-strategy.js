const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');




// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
        clientID:"842106441586-16okj3lit2lj7ni736eejh8fv82k9680.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL:"https://nss-cu.herokuapp.com/users/auth/google/callback"
    },
     function(accessToken,refreshToken,profile,done){
         User.findOne({email:profile.emails[0].value}).exec(function(err,user){
             if (err){console.log('err in google strategy-passport',err);  return;}
           console.log(accessToken, refreshToken);
             console.log(profile);

             if(user){
                //  if found set this useer as req.user
                 return done(null,user);
             }else{
                //  if not found ,create the user and set this as
                 User.create({
                     name:profile.displayName,
                     email:profile.emails[0].value,
                     password:crypto.randomBytes(20).toString('hex')
                 },function(err,user){
                     if(err){console.log('error in creating user google strategy-passport',err); return; }

                     return done(null,user);
                 });
             }
            });
     }
));

module.exports = passport;

////////////////////////////////////////////////////////////////



