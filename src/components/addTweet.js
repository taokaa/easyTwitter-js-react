import React, { useState } from 'react';


function AddTweet(props) {
    const [tweetValue, setTweetValue] = useState('');
    function handleTweetChange(value) {
        setTweetValue(value);
        console.log(tweetValue);
    }

    function handleAddTweet(newName, newImg, newTweet) {
        props.onClick(newName, newImg, newTweet);
        console.log(tweetValue);
        setTweetValue('');
    }

    return (
        <div className='addTweet'>
            <div className='addTweetTop'>
                <div className='flexImgAndName'>
                    <img className='accountImg'
                        src={props.img} alt='アイコン'></img>
                    <div className='accountName'>{props.name}</div>
                </div>
            </div>
            <div className='addTweetCenter'>
                <textarea
                    value={tweetValue}
                    placeholder='いまどうしてる？'
                    onChange={(e) => {
                        handleTweetChange(e.target.value)
                    }}
                ></textarea>
            </div>
            <div className='addTweetBottom'>
                <button onClick={() => {
                    handleAddTweet(props.name, props.img, tweetValue)
                }}
                >
                    ツイートする
                </button>
            </div>
            
        </div>
    );
}


export {AddTweet};