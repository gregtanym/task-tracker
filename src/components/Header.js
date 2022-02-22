import React from 'react'
import Button from './Button'

const Header = ({ title, onClickButton, showAdd }) => {

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button onClickButton={onClickButton} 
            color={showAdd ? 'black' : 'green'} 
            text={showAdd ? 'Close' : 'Add'}/>
        </header>
        
    )
}

// if addButton array is true, change text to add and color to green

export default Header;