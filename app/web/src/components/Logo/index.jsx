import React from 'react';
import { Link } from 'umi';
import logo from '@/assets/pino.svg';
import styles from './index.less';

const Logo = props => {
  return (
    <h1 className={styles.logo}>
      <Link to="/">
        <img src={logo} />
        <span className={styles.text}>PINO 自动化平台</span>
      </Link>
    </h1>
  );
};

export default Logo;
