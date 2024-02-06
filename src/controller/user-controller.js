import { UserService } from "../services/index.js";
import StatusCodes from "http-status-codes";

const userService = new UserService();

class UserController{
    async signup(req,res){
        try {
            const data = req.body;
            const response = await userService.signup(data);
            return res.status(StatusCodes.CREATED)
                    .json({
                        success: true,
                        message: "Successfully Created the User",
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

    async signin(req,res){
        try {
            const data = req.body;
            const response = await userService.signin(data);
            return res.status(StatusCodes.OK)
                    .json({
                        success: true,
                        message: "Successfully Logged in",
                        data: response,
                        error: {},
                    })
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({
                        success: false,
                        message: "Something went wrong while logging in user",
                        data: {},
                        error: error,
                    })
        }
    }
}

export default UserController;