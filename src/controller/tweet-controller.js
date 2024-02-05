import { TweetService } from "../services/index.js";
import StatusCodes from "http-status-codes";

const tweetService = new TweetService();

class TweetController{
    async createTweet(req,res){
        try {
            const data = req.body;
            const response = await tweetService.createTweet(data);
    
            return res.status(StatusCodes.CREATED)
                    .json({
                        success: true,
                        message: "Successfully Created the Tweet",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong",
                        data: {},
                        error: error,
                    })
        }
    }
    
    async getTweet(req,res){
        try {
            const id = req.params.id;
            const response = await tweetService.getTweet(id);
    
            return res.status(StatusCodes.OK)
                    .json({
                        success: true,
                        message: "Successfully Fetched the Tweet",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong",
                        data: {},
                        error: error,
                    })
        }
    }

    async getTweets(req,res){
        try {
            const response = await tweetService.getTweets();
            return res.status(StatusCodes.OK)
                    .json({
                        success: true,
                        message: "Successfully Fetched the Tweet",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong",
                        data: {},
                        error: error,
                    })
        }
    }
}

export default TweetController;