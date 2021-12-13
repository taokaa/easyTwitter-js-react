import React from 'react';
import '../styles/tweetContainers.css';

function TweetContainers(props) {

    function TweetContainer() {
        console.log(props.tweetList);
        return (
            props.tweetList.map((tweet) => {
                return (
                    <div key={tweet.tweet}
                        className='tweetContainer'
                    >
                        <div className='flexImgAndName'>
                            <img className='accountImg'
                                src={tweet.img} alt='アイコン'></img>
                            <div className='accountName'>{tweet.name}</div>
                        </div>
                        <div className='accountTweet'>{tweet.tweet}</div>
                    </div>
                );
            })
        );
    }

    return (
        <div className='tweetContainers'>
            <TweetContainer />
        </div>
    );
}


export {TweetContainers};