import React from 'react'
import img from '../../../../Assets/Img/pana.png'
import styles from './DesignSection.module.css'
import SignUpButton from '../../../../Components/Buttons/SignUpButton/SignUpButton'
const DesignSection = () => {
  return (
    <div className={styles.designSection}>
      <div className='container mx-auto'>
        <div className={styles.mContent}>
          <div className={styles.imgBox}>
            <img src={img} alt="" />
          </div>
          <div className={styles.textBox}>
            <h2 className={styles.h2}>How to design your site footer like we did</h2>
            <p className='pb-6'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <SignUpButton bgColor="#4CAF4F" buttonText="Learn More"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignSection
