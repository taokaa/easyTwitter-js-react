import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

import odaImg from './img/nigaoe_oda_nobunaga.png';
import akechiImg from './img/nigaoe_akechi_mitsuhide.png';


const tweetList = [
    {name: '織田信長', img: odaImg, tweet: '本能寺燃えとるんじゃが…'},
    {name: '明智光秀', img: akechiImg, tweet: '本能寺に火付けたったww'}
]

const accountList = [
    {name: '織田信長', img: odaImg},
    {name: '明智光秀', img: akechiImg},
]
ReactDOM.render(<App accountList={accountList} tweetList={tweetList}/>, 
    document.getElementById('root'));