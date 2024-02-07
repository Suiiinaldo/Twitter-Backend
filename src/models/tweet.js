import mongoose from "mongoose";

const tweeetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,"Tweet cannot be more than 250 characters"],
    },
    noOfRetweets: {
        type: Number,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    image: {
        type: String,
    }
});

const Tweet = mongoose.model('Tweet',tweeetSchema);

export default Tweet;