import Link from 'next/link';
import React from 'react';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeadline}>מארס</div>
      <div className={styles.homeSubHeadline}>שומרים עלייך.</div>
      <div className={styles.homeButtonsContainer}>
        <Link href='/placeScreen'>
          <div className={styles.homeButton}>להוצאת נשק</div>
        </Link>
        <div className={styles.homeButton}>השמירות שלי</div>
      </div>
    </div>
  )
}

export default Home;
