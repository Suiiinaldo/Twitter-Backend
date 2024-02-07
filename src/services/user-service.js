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
}

export default UserService;