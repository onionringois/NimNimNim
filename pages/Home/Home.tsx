import Link from 'next/link';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './home.module.scss';

const sendWhatsapp = () => {
  fetch('/api/distributor').then(()=> toast("ההודעה נשלחה"))
}

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeadline}>מארס</div>
      <div className={styles.homeSubHeadline}>שומרים עלייך.</div>
      <div className={styles.homeButtonsContainer}>
        <Link href='/placeScreen'>
          <div className={styles.homeButton}>להוצאת נשק</div>
        </Link>
        <div className={styles.homeButton} onClick={sendWhatsapp}>
            שליחה לווטסאפ למפקדים
        </div>
        <div className={styles.homeButton}>השמירות שלי</div>
      </div>
    </div>
  )
}

export default Home;
