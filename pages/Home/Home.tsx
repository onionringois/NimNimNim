import React from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeadline}>מארס</div>
      <div>שומרים עלייך</div>
      <div>להוצאת נשק</div>
    </div>
  )
}

export default Home;
