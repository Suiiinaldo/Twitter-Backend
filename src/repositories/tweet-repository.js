import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";


class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

    async deleteTweet(data){
        try {
            const response = await Tweet.deleteOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetRepository;