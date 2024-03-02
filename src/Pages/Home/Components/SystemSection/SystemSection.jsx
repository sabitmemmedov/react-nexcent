import React from 'react';
import styles from './SystemSection.module.css';
import cardImg from '../../../../Assets/Img/Icon.png';
import cardImg2 from '../../../../Assets/Img/Icon1.png';
import cardImg3 from '../../../../Assets/Img/Icon2.png';

const SystemSection = () => {
    const data = [
        {
            title: 'Membership Organisations',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
            images: cardImg
        },
        {
            title: 'National Associations',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
            images: cardImg2
        },
        {
            title: 'Clubs And Groups',
            desc: 'Our membership management software provides full automation of membership renewals and payments',
            images: cardImg3
        }
    ];

    return (
        <div className={styles.systemSection}>
            <div className='container mx-auto'>
                <div className={styles.mContent}>
                    <div className={styles.headText}>
                        <h2 className={styles.h2}>
                            Manage your entire community in a single system
                        </h2>
                        <p className={styles.p}>Who is Nextcent suitable for?</p>
                    </div>
                    <div className={styles.cards}>
                        {data.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.imgBox}>
                                    <span className={styles.imgBg}>
                                        <img className={styles.cardImg} src={item.images} alt="" />
                                    </span>
                                </div>
                                <div className={styles.textBox}>
                                    <h4 className={styles.title}>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemSection;
