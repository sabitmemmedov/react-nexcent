import React from 'react'
import styles from './HelpingSection.module.css'
import img from '../../../../Assets/Img/Vector.png'
const HelpingSection = () => {
  return (
    <div className={styles.helpingSection}>
      <div className='container mx-auto'>
        <div className={styles.mContent}>
            <div className={styles.textBox}>
              <h2 className={styles.h2}>Helping a local</h2>
              <h3 className={styles.h3}>business reinvent itself</h3>
              <p className={styles.p}>We reached here with our hard work and dedication</p>
            </div>
            <div className={styles.cardsBox}>
              <div className={styles.cardBox}>
                <div className="imgBox">
                  <img src={img} alt="" />
                </div>
                <div className={styles.cardText}>
                  <h4 className={styles.cardTitle}>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className={styles.cardBox}>
                <div className="imgBox">
                  <img src={img} alt="" />
                </div>
                <div className={styles.cardText}>
                  <h4  className={styles.cardTitle}>46,328</h4>
                  <p className={styles.subTitle}>Clubs</p>
                </div>
              </div><div className={styles.cardBox}>
                <div className="imgBox">
                  <img src={img} alt="" />
                </div>
                <div className={styles.cardText}>
                  <h4  className={styles.cardTitle}>828,867</h4>
                  <p className={styles.subTitle}>Event Bookings</p>
                </div>
              </div><div className={styles.cardBox}>
                <div className="imgBox">
                  <img src={img} alt="" />
                </div>
                <div className={styles.cardText}>
                  <h4  className={styles.cardTitle}>1,926,436</h4>
                  <p  className={styles.subTitle}>Payments</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HelpingSection
