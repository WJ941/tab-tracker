const passport = require('passport')
const {user} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config')
 
passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done ) {
    try {
      const auser = await user.findOne({
        where: {
          id: jwtPayload.id
        }
      })
      if(!auser){
        return done(new Error(), false)
      }
      return done(null, auser)
    } catch(err) {
       return done(new Error(), false)
    }
  })
)
module.exports = null 