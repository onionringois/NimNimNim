import React from 'react';
import Duties from './Duties/Duties';
import styles from './profile.module.scss';

export enum DutyStatus {
  Pending = 'ממתין',
  Approved = 'אושר',
  Denied = 'נדחה',
}

export enum DutyType {
  Shmira = 'שמירה',
  Hagnash = 'הגנש',
  Toranut = 'תורנות',
}

export interface IDuty {
  dutyType: DutyType;
  date: Date;
  status: DutyStatus;
}

const duties: IDuty[] = [
  {
    dutyType: DutyType.Shmira,
    date: new Date(),
    status: DutyStatus.Pending,
  },
  {
    dutyType: DutyType.Hagnash,
    date: new Date(),
    status: DutyStatus.Approved,
  },
  {
    dutyType: DutyType.Toranut,
    date: new Date(),
    status: DutyStatus.Denied,
  },
  {
    dutyType: DutyType.Toranut,
    date: new Date(),
    status: DutyStatus.Denied,
  },
  {
    dutyType: DutyType.Toranut,
    date: new Date(),
    status: DutyStatus.Denied,
  }
]

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>הקדרים שלי</div>
      <div className={styles.content}>
        <Duties duties={duties} />
      </div>
    </div>
  )
}

export default Profile;
