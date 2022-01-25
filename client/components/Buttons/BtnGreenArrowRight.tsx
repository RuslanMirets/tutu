import React from 'react';
import styles from './Buttons.module.scss';

export const BtnGreenArrowRight: React.FC = ({ children }) => {
  return (
    <button className={`${styles.green} ${styles.order} ${styles.arrowRigth}`}>{children}</button>
  );
};
