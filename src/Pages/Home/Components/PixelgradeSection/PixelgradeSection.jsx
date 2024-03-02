import React from 'react'
import styles from './PixelgradeSection.module.css'
import SignUpButton from '../../../../Components/Buttons/SignUpButton/SignUpButton'
import img from '../../../../Assets/Img//frame.png'
const PixelgradeSection = () => {
    return (
        <div className={styles.pixelgradeSection}>
            <div className='container mx-auto'>
                <div className={styles.mContent}>
                    <div className={styles.imgBox}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.textBox}>
                        <h2 className={styles.h2}>
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <SignUpButton bgColor='#4CAF4F' buttonText='Learn More'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PixelgradeSection
