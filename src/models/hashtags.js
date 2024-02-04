import mongoose from "mongoose";
import { ObjectId } from "bson";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
});

const HashTag = mongoose.model('Hashtag',hashtagSchema);

export default HashTag;