import HashTag from "../models/hashtags.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{
    constructor(){
        super(HashTag);
    }

    async getByName(text){
        try {
            const data = await this.model.find({
                text: text
            });
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;