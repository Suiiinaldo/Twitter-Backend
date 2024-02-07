import { TweetService } from "../services/index.js";
import StatusCodes from "http-status-codes";
import upload from "../config/file-upload.js";

const tweetService = new TweetService();


class TweetController{
    async createTweet(req,res){
        const singleUploader = upload.single('image');
        try {
            singleUploader(req,res,async function(err,data) {
                if(err){
                    console.log(err);
                }
                const payload = {...req.body};
                payload.image = req.file.location;
                const response = await tweetService.createTweet(payload);
                return res.status(StatusCodes.CREATED)
                    .json({
                        success: true,
                        message: "Successfully Created the Tweet",
                        data: response,
                        error: {},
                    })
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

    async getTweet(req,res){
        try {
            const response = await tweetService.getTweet(req.params.id);
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