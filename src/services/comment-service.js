import { TweetRepository, CommentRepository } from "../repositories/index.js"; 

const tweetRepo = new TweetRepository();
const commentRepo = new CommentRepository();


class CommentService{
    
    async createComment(modelId, modelType, userId, content){
        let commentable;
        if(modelType === "Tweet"){
            commentable = await tweetRepo.get(modelId);
        }
        else if(modelType === "Comment"){
            commentable = await commentRepo.get(modelId);
        }
        else{
            console.log("Invalid Model Type");
            throw new Error("Invalid Model Type");
        }
        const comment = await commentRepo.create({
            content: content,
            user: userId,
            onModel: modelType,
            commentable: modelId,
            comments: [],
        });
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

export default CommentService;