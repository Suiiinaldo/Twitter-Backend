import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        unique: true,
        required: true,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
});

const HashTag = mongoose.model('Hashtag',hashtagSchema);

export default HashTag;