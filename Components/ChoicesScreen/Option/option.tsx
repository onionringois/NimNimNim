import { url } from 'inspector';
import React from 'react';
import styles from './option.module.scss';
import home from '../../../assets/home.jpeg';
import Link from 'next/link';

interface IProps {
  title: string;
  icon: string;
  linkTo: string;
}

const Option: React.FC<IProps> = ({title, icon, linkTo}: IProps) => {
  return (
    <div className={styles.optionContainer}>
      <Link href={linkTo}>
      <div className={styles.icon} />
      </Link>
        <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Option;
