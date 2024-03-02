import React from 'react'
import styles from './LiberioSection.module.css'
import SignUpButton from '../../../../Components/Buttons/SignUpButton/SignUpButton'
const LiberioSection = () => {
  return (
    <div className={styles.liberioSection}>
    <div className='container mx-auto'>
        <div className={styles.mContent}>
            <h2 className={styles.title}>Pellentesque suscipit fringilla libero eu.</h2>
            <SignUpButton bgColor='#4CAF4F' buttonText='Get a Demo'/>
        </div>
    </div>
    </div>
  )
}

export default LiberioSection
