import mongoose from "mongoose";

const tweeetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
    },
    noOfRetweets: {
        type: Number,
    },
    commment: {
        type: String,
    },
});

const Tweet = mongoose.model('Tweet',tweeetSchema);

export default Tweet;