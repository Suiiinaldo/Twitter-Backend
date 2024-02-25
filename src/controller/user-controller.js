import { UserService } from "../services/index.js";
import StatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/index.js";


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

    async toggleFollowing(req,res){
        try {
            const userTo = req.body.userTo; // Modi
            const token = req.headers['authorization'].split(' ')[1];
            const userFrom = jwt.verify(token, SECRET_KEY);
            const response = await userService.toggleFollowing(userTo, userFrom.id);
            return res.status(StatusCodes.OK)
                        .json({
                            success : true,
                            data : response,
                            error : [],
                        });
        } catch (error) {
            console.log(error);
            throw error;

        }
    }
}

export default UserController;