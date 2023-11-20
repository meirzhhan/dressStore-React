import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({children}) => {
    return (
        <>
            <button className={cl.product__button}>
                {children}
                {/* <div className={cl.product__button__content}>
                    Show details
                </div> */}
            </button>
        </>
        
    );
};

export default MyButton;