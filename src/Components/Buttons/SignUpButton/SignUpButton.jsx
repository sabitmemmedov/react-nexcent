import React from 'react'
import styles from './SignUpButton.module.css'
const SignUpButton = ({buttonText, bgColor ,color}) => {
  return (
    <div>
      <button style={{backgroundColor:bgColor, color:color}} className={styles.signUpButton}>{buttonText}</button>
    </div>
  )
}

export default SignUpButton
