import { TweetRepository, HashtagRepository } from "../repositories/index.js";

const tweetrepo = new TweetRepository();
const hashtagrepo = new HashtagRepository();

class TweetService{
    async createTweet(data){
        try {
            const content = data.content;
            const tags = content.match(/#+[a-zA-Z0-9(_)]+/g)
                                .map((tag) => tag.substring(1)
                                .toLowerCase());
            const tweet = await tweetrepo.create(data);
    
            let alreadyPresentTags = await hashtagrepo.getByName(tags);
            let ContentofPresentTags = alreadyPresentTags.map(tags => tags.text);
            let newTags = tags.filter( tag => !ContentofPresentTags.includes(tag));
            newTags = newTags.map( tag => {
                return {
                    text: tag,
                    tweets: [tweet.id],
                }
            });
            await hashtagrepo.bulkInsert(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async getTweet(id){
        try {
            const tweet = await tweetrepo.get(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweets(){
        try {
            const tweets = await tweetrepo.getAll({});
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetService;