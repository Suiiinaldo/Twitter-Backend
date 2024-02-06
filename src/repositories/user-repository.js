import CrudRepository from "./crud-repository.js";
import User from "../models/users.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async getByName(data){
        try {
            const user = await this.model.findOne({
                 $or : [{email: data.email}, {username: data.username}], 
            });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;