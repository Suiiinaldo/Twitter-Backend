import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../config/index.js";

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


const User = mongoose.model('User',userSchema);

export default User;