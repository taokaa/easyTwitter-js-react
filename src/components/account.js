import React from 'react';
import '../styles/account.css';

function Account(props) {
  return (
    <div className='account'>
        <img className='img'
            src={props.img} alt='アイコン'></img>
        <div className='accountName'>
            {props.name}としてツイート
        </div>
    </div>
  );
}


export {Account};