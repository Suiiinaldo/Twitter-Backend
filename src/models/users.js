import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT_ROUNDS, SECRET_KEY, JWT_EXPIRY } from "../config/index.js";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,

    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
});

userSchema.pre('save', function (next) {
    const user = this;
    const salt = bcrypt.genSaltSync(+SALT_ROUNDS);
    const encryptedPass = bcrypt.hashSync(user.password,salt);
    user.password = encryptedPass;
    next();
})

userSchema.methods.comparePassword = function compare(password){
    const user = this;
    return bcrypt.compareSync(password,user.password);
}

userSchema.methods.genJWT = function generate(){
    return jwt.sign({
        id: this._id,
        email: this.email,
    },SECRET_KEY, {
        expiresIn: JWT_EXPIRY,
    });
}


const User = mongoose.model('User',userSchema);

export default User;