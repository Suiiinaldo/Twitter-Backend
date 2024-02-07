import { CommentService } from "../services/index.js";
import StatusCodes from "http-status-codes";

const commentService = new CommentService();

class CommentController{

    async createComment(req,res){
        try {
            const data = req.body;
            const response = await commentService.createComment(data.modelId,data.modelType,data.user, data.content);
            return res.status(StatusCodes.OK)
                    .json({
                        success: true,
                        message: "Successfully created a new comment",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong while commenting",
                        data: {},
                        error: error,
                    })
        }
    }
}

export default CommentController;