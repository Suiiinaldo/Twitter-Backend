import JWT from "passport-jwt";
import User from "../models/users.js";
import { SECRET_KEY } from "../config/index.js";


const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : SECRET_KEY,
};

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts,async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null, false);
        }
        else{
            done(null,user);
        }
    }));
}