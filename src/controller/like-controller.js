import { LikeService } from "../services/index.js";
import StatusCodes from "http-status-codes";

const likeService = new LikeService();

class LikeController{

    async toggleLike(req,res){
        try {
            const data = req.body;
            const response = await likeService.toggleLike(data.modelId,data.modelType,data.user);
            return res.status(StatusCodes.OK)
                    .json({
                        success: true,
                        message: "Successfully toggled a like",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong while toggling",
                        data: {},
                        error: error,
                    })
        }
    }
}

export default LikeController;