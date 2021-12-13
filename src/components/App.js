import React from 'react';
import { useState } from 'react';
import {Side} from './side';
import {Main} from './main';
import '../styles/app.css';

function App(props) {
  const [name, setName] = useState(props.accountList[0].name);
  const [img, setImg] = useState(props.accountList[0].img);
  const [tweet, setTweet] = useState(null)
    
  function handleAccountChange(newName, newImg) {
    setName(newName);
    setImg(newImg);
  }

  function handleAddTweet(newName, newImg, newTweet) {
    setTweet(newTweet);
    setName(newName);
    setImg(newImg);
    props.tweetList.unshift({
      name: newName,
      img: newImg,
      tweet: newTweet
    });
  }

  return (
    <div className='flexApp'>
      <Side
        name={name}
        img={img}
        onClick={handleAccountChange}
        accountList={props.accountList}
      />
      <Main 
        name={name}
        img={img}
        tweet={tweet}
        onClick={handleAddTweet}
        tweetList={props.tweetList}
      />
    </div>
  );
}

export {App};