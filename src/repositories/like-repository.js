import CrudRepository from "./crud-repository.js";
import Like from "../models/like.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserandLikeable(data){
        try {
            const like = await this.model.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default LikeRepository;