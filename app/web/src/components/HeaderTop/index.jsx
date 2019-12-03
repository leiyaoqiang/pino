import React from 'react';
import Logo from '@/components/Logo';
import Menu from '@/components/MenuTop';
import Right from '@/components/HeaderRight';
import styles from './index.less';

const HeaderTop = props => (
  <div className={styles.headerTop}>
    <div className={styles.headerLeft}>
      <Logo />
    </div>
    <div className={styles.headerCenter}>
      <Menu />
    </div>
    <div className={styles.headerRight}>
      <Right userInfo={props.userInfo} />
    </div>
  </div>
);

export default HeaderTop;
