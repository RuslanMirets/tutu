import React from 'react';
import styles from './Buttons.module.scss';

export const BtnBlue: React.FC = ({children}) => {
  return <button className={styles.blue}>{children}</button>;
};
