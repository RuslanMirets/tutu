import React from 'react';
import Drawer from '@mui/material/Drawer';
import styles from './Drawer.module.scss';
import { BtnGreenArrowRight } from '../Buttons/BtnGreenArrowRight';

interface DrawerProps {
  onClose: () => void;
  open: boolean;
}

export const TemporaryDrawer: React.FC<DrawerProps> = ({ onClose, open }) => {
  return (
    <Drawer classes={{ paper: styles.paper }} anchor="right" open={open} onClose={onClose}>
      <h2>Корзина</h2>
      <div className={styles.items}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <div>
        <div className={styles.total}>
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </div>
        <BtnGreenArrowRight>Оформить заказ</BtnGreenArrowRight>
      </div>
    </Drawer>
  );
};
