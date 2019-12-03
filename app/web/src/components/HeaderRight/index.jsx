import React from 'react';
import { Spin, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

const HeaderRight = ({ userInfo }) => {
  return (
    <div className="headerRight">
      {userInfo.userName ? (
        <>
          <Link className={styles.action} to="">
            <Icon type="user" />
            <span className={styles.text}>{userInfo.userName}</span>
          </Link>
          <Link className={styles.action} to="/logout">
            <Icon type="logout" />
            <span className={styles.text}>退出</span>
          </Link>
        </>
      ) : (
        <Spin size="small" style={{marginLeft: 8, marginRight: 8}} />
      )}
    </div>
  );
};

export default HeaderRight;
