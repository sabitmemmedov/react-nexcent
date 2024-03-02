import React from 'react'
import styles from './MarketingSection.module.css'
import foto from '../../../../Assets/Img/image18.png'
import right from '../../../../Assets/Img/Right.png'
const MarketingSection = () => {
    return (
        <div className={styles.marketingSection}>
            <div className='container mx-auto'>
                <div className={styles.mContent}>
                    <div className={styles.headText}>
                        <h2 className={styles.h2}>Caring is the new marketing</h2>
                        <p className={styles.p}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.imgBox}>
                                <img className={styles.cardImg} src={foto} alt="" />
                                <div className={styles.cardText}>
                                    <p className={styles.cardDesc}>Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <span className={styles.readMore}>Readmore <img style={{width:'15px',height:'15px',paddingTop:'6px'}} src={right} alt="" /></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgBox}>
                                <img className={styles.cardImg} src={foto} alt="" />
                                <div className={styles.cardText}>
                                    <p className={styles.cardDesc}>Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <span className={styles.readMore}>Readmore <img style={{width:'15px',height:'15px',paddingTop:'6px'}} src={right} alt="" /></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgBox}>
                                <img className={styles.cardImg} src={foto} alt="" />
                                <div className={styles.cardText}>
                                    <p className={styles.cardDesc}>Creating Streamlined Safeguarding Processes with OneRen</p>
                                    <span className={styles.readMore}>Readmore <img style={{width:'15px',height:'15px',paddingTop:'6px'}} src={right} alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingSection
