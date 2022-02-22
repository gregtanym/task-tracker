import React from 'react'

const Button = ({text, color, onClickButton}) => {
    return(
        <button 
        className='btn'
        style={{backgroundColor: color}}
        onClick={onClickButton}>{text}</button>
    )
}

export default Button;