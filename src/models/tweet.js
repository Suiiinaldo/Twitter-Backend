import mongoose from "mongoose";
import { ObjectId } from "bson";

const tweeetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    likes: {
        type: Number,
    },
    noOfRetweets: {
        type: Number,
    },
    commment: {
        type: ObjectId,
    },
});

const Tweet = mongoose.model('Tweet',tweeetSchema);

export default Tweet;