import React from 'react';
import { IDuty } from '../Profile';
import styles from './duties.module.scss';
import Duty from './Duty/Duty';

interface IDutiesProps {
    duties: IDuty[];
}

const Duties: React.FC<IDutiesProps> = ({ duties }: IDutiesProps) => {
  return (
    <div className={styles.duties}>
        {duties.length === 0 ? 'אין משימות' : duties.map(duty => <Duty duty={duty} />)}
    </div>
  )
}

export default Duties;
