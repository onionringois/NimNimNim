import React from 'react';
import { IOption } from '../../Models/option';
import Option from './Option/option';
import styles from './choicesScreen.module.scss';

interface IProps {
  header: string;
  icons: IOption[];
  linkTo: string;
}

const ChoicesScreen: React.FC<IProps> = ({header, icons, linkTo}: IProps) => {
  return (
    <div className={styles.choicesContainer}>
        <div className={styles.headline}>{header}</div>
        <div className={styles.optionsContainer}>
          {icons.map((option: IOption) => <Option key={option.icon} icon={option.icon} title={option.title} linkTo={linkTo} />)}
        </div>
    </div>
  )
}

export default ChoicesScreen;
