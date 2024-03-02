import React from 'react';
import styles from './ClientSection.module.css';
import image1 from '../../../../Assets/Img/1.png';
import image2 from '../../../../Assets/Img/2.png';
import image3 from '../../../../Assets/Img/3.png';
import image4 from '../../../../Assets/Img/4.png';
import image5 from '../../../../Assets/Img/5.png';
import image6 from '../../../../Assets/Img/6.png';

const ClientSection = () => {
  const images = [image1,image2, image3, image4,image5,image6,image3]; 

  return (
    <div className={styles.clientSection}>
      <div className='container mx-auto'>
        <div className={styles.mContent}>
          <div className={styles.headText}>
            <h2 className={styles.h2}>Our Clients</h2>
            <p className={styles.p}>We have been working with some Fortune 500+ clients</p>
          </div>
          <div className={styles.cards}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} /> // Görüntüleri ekrana yazdırıyoruz
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
