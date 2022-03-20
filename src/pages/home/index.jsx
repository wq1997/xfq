import { history } from 'umi';
import {
  CompassOutline,
  AddCircleOutline,
  UserCircleOutline,
} from 'antd-mobile-icons';

import styles from './index.less';

const HomeBottomSelection = [
  {
    icon: <CompassOutline className={styles.icon} />,
    label: '首页',
    key: 'first',
    url: '/home/first',
  },
  {
    icon: <AddCircleOutline className={styles.icon} />,
    label: '发布',
    key: 'second',
    url: '/home/second',
  },
  {
    icon: <UserCircleOutline className={styles.icon} />,
    label: '自己',
    key: 'third',
    url: '/home/third',
  },
];

const Home = (props) => {
  const { children } = props;
  const { location } = props;

  const current = location.pathname.split('/')[2];

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>{children}</div>
      <div className={styles.homeBottom}>
        {HomeBottomSelection.map((item) => {
          return (
            <div
              className={`${styles.homeBottomItem} ${
                current === item.key && styles.homeBottomItemSelection
              }`}
              key={item.key}
              onClick={(_) => history.push(item.url)}
            >
              <div className={styles.homeBottomTop}>{item.icon}</div>
              <div className={styles.homeBottomLabel}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
