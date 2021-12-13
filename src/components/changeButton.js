import React from 'react';
function ChangeButton(props) {

    function Buttons() {
        return(
            props.accountList.map((account) => {
                return (
                    <button key={account.name}
                        className='button'
                        onClick={() => {
                            props.onClick(account.name, account.img)
                        }}
                    >
                        {account.name}
                    </button>
                );
            })
        )
    }

    return (
    <div className='changeButton'>
        <Buttons />
    </div>
    );
}


export {ChangeButton};