import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { TemporaryDrawer } from '../Drawer';

export const Header: React.FC = () => {
  const isAuth = true;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link href="/">
            <a>
              <img src="/static/logo.svg" alt="Logo" />
            </a>
          </Link>
          <ul className={styles.actions}>
            {isAuth ? (
              <>
                <li className={styles.cart} onClick={openDrawer}>
                  <ShoppingCartOutlinedIcon />
                  <span>1205 руб.</span>
                </li>
                <li className={styles.item}>
                  <Link href="/favorites">
                    <a>
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="/profile">
                    <a>
                      <AccountCircleOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li className={styles.item}>
                  <LogoutOutlinedIcon />
                </li>
              </>
            ) : (
              <>
                <li className={styles.item}>
                  <LoginOutlinedIcon />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <TemporaryDrawer onClose={closeDrawer} open={drawerOpen} />
    </header>
  );
};
