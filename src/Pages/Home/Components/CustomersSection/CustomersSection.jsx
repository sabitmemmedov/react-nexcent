import React from 'react'
import styles from './CustomersSection.module.css'
import img from '../../../../Assets/Img/customers.png'
import logo from '../../../../Assets/Img/customersLogo.png'
import icon from '../../../../Assets/Img/Right.png'
const CustomersSection = () => {
  return (
    <div className={styles.customersSection}>
      <div className='container mx-auto'>
        <div className={styles.mContent}>
            <div className={styles.imgBox}>
                <img src={img} alt="" />
            </div>
            <div className={styles.textBox}>
                <p className={styles.p}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4  className={styles.h4}>Tim Smith</h4>
                <h6  className={styles.h6}>British Dragon Boat Racing Association</h6>
                <div className={styles.logos}>
                    <img src={logo} alt="" />
                    <img src={logo} alt="" /><img src={logo} alt="" /><img src={logo} alt="" /><img src={logo} alt="" /><img src={logo} alt="" />
                    <span className={styles.span}>Meet all customers <img className={styles.rightImg} src={icon} alt="" /></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersSection
