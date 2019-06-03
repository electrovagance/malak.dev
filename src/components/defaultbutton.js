import React from 'react'
import buttonStyles from './defaultbutton.module.scss'

const DefaultButton = (props) => {
    return(
        <button className={buttonStyles.button}>{props.children}</button>
    )
}

export default DefaultButton;