import React from 'react';
import { DutyStatus, IDuty } from '../../Profile';
import styles from './duty.module.scss';

interface IDutyProps {
    duty: IDuty;
}

const Duty: React.FC<IDutyProps> = ({ duty }: IDutyProps) => {
  const { dutyType, date, status } = duty;

  return (
    <div className={styles.duty}>
        <div className={styles.type}>
            {dutyType}
        </div>
        <div className={styles.date}>
            {date.toLocaleDateString()}
        </div>
        <div className={styles.status}>
            <div className={styles.text}>
                {status}
            </div>
            <div className={styles.icon}>
                { status === DutyStatus.Approved ? 'v' : 'x'}
            </div>
        </div>
    </div>
  )
}

export default Duty;
