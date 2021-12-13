import React from 'react';
import {Account} from './account'
import {ChangeButton} from './changeButton';

function Side(props) {
  return (
    <div className='side'>
      <Account name={props.name}
        img={props.img}
      />
      <ChangeButton
        onClick={props.onClick}
        accountList={props.accountList}
      />
    </div>
  );
}


export {Side};