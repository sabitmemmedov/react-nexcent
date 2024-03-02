// import React from 'react'
// import heroImg from '../../../Assets/Img/Illustration.png'
// import SignUpButton from '../../../Components/Buttons/SignUpButton/SignUpButton'
// import styles from './HeroSection.module.css'
// const HeroSection = () => {
//     return (
//         <div style={{ backgroundColor: '#F5F7FA' }} >
//             <div className='container sm mx-auto py-20   flex ' >
//                 <div className="w-1/2   sm:w-full ">
//                     <h1 className={styles.h1}>Lessons and insights</h1>
//                     <h2 className={styles.h2}>from 8 years</h2>
//                     <p className={styles.p}>Where to grow your business as a photographer: site or social media?</p>
//                     <SignUpButton bgColor="#4CAF4F"  buttonText='Register'/>
//                 </div>
//                 <div className="w-1/2 flex  ">
//                     <img src={heroImg} alt="" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HeroSection

import React from 'react';
import heroImg from '../../../../Assets/Img/Illustration.png';
import SignUpButton from '../../../../Components/Buttons/SignUpButton/SignUpButton';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className='container mx-auto '>
                <div className={styles.mContent}>
                <div className={styles.col}>
                    <h1 className={styles.h1}>Lessons and insights</h1>
                    <h2 className={styles.h2}>from 8 years</h2>
                    <p className={styles.p}>Where to grow your business as a photographer: site or social media?</p>
                    <SignUpButton bgColor="#4CAF4F" buttonText='Register'/>
                </div>
                <div className={styles.colImg}>
                    <img className={styles.img}  src={heroImg} alt="" />
                </div>
                </div>
               
              
            </div>
        </div>
    )
}

export default HeroSection;

