import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../Assets/Logo/Logo.png'
import insta from '../../Assets/Img/Path.png'
import inplogo from '../../Assets/Img/inplogo.png'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container mx-auto'>
                <div className={styles.mContent}>
                    <div className={styles.footerLeft}>
                        <img className={styles.logo} src={Logo} alt="" />
                        <p className={styles.p}> Copyright © 2020 Nexcent ltd.</p>
                        <p className={styles.p}>All rights reserved</p>
                        <ul className={styles.socialLinks}>
                            <li className={styles.socialLink}>
                                <img src={insta} alt="" />
                            </li>
                            <li className={styles.socialLink}>
                                <img src={insta} alt="" />
                            </li>
                            <li className={styles.socialLink}>
                                <img src={insta} alt="" />
                            </li>
                            <li className={styles.socialLink}>
                                <img src={insta} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerRight}>
                        <ul className={styles.footerMenu}>
                            <li className={styles.menuItem}><strong className={styles.itemsTitle}    >Company</strong></li>
                            <li className={styles.menuItem}>About us</li>
                            <li className={styles.menuItem}>Blog</li>
                            <li className={styles.menuItem}>Contact us</li>
                            <li className={styles.menuItem}>Pricing</li>
                            <li className={styles.menuItem}>Testimonials</li>
                        </ul>
                        <ul className={styles.footerMenu}>
                            <li className={styles.menuItem}><strong className={styles.itemsTitle}>Support</strong></li>
                            <li className={styles.menuItem}>Help center</li>
                            <li className={styles.menuItem}>Terms of service</li>
                            <li className={styles.menuItem}>Legal</li>
                            <li className={styles.menuItem}>Privacy policy</li>
                            <li className={styles.menuItem}>Status</li>
                        </ul>
                        <ul className={styles.footerMenu}>
                            <li className={styles.menuItem}><strong className={styles.itemsTitle}>Stay up to date</strong></li>
                            <li className={styles.menuItem}><input className={styles.inp} type="text" placeholder='Your email address' name="" id="" /> <img className={styles.inplogo} src={inplogo} alt="" /></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
