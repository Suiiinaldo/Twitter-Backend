import { TweetRepository, LikeRepository, CommentRepository } from "../repositories/index.js"; 

const tweetRepo = new TweetRepository();
const likeRepo = new LikeRepository();
const commentRepo = new CommentRepository();


class LikeService{
    
    async toggleLike(modelId, modelType, userId){
        let likeable;
        if(modelType === "Tweet"){
            likeable = await tweetRepo.get(modelId);
        }
        else if(modelType === "Comment"){
            likeable = await commentRepo.get(modelId);
        }
        else{
            console.log("Invalid Model Type");
            throw new Error("Invalid Model Type");
        }
        const exists = await likeRepo.findByUserandLikeable({
            user : userId,
            onModel: modelType,
            likeable: modelId,
        });
        let isAdded;
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await likeRepo.delete(exists.id);
            isAdded = false;
        }
        else{
            const newLike = await likeRepo.create({
                user: userId,
                onModel: modelType,
                likeable: modelId,
            });
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;