import User from "../models/users.js";
import { UserRepository } from "../repositories/index.js";

const userRepo = new UserRepository();

class UserService{

    async signup(data){
        try {
            const user = await userRepo.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
    
    async signin(data){
        try {
            const email = data.email;
            const password = data.password;
            const user = await userRepo.getByName(data);
            if(!user){
                throw {
                    message : "No user exist with this email or username"
                };
            }
            if(!user.comparePassword(password)){
                throw{
                    message: "Invalid Password",
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }

    async toggleFollowing(userTo, userFrom){
        try {
            let followed = false;
            const user = await userRepo.get(userFrom);
            const influen = await userRepo.get(userTo);
            const exists = await userRepo.getByNameAndFollower(userFrom,userTo);
            if(!exists){
                user.followings.push(userTo);
                await user.save();
                influen.followers.push(userFrom);
                await influen.save();
                followed = true;
            }
            else{
                user.followings.pull(userTo);
                await user.save();
                influen.followers.pull(userFrom);
                await influen.save();
            }
            return {
                followed : followed,
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserService;