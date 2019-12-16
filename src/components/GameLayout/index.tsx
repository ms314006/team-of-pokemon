import React from 'react';
import styles from './index.scss';

const GameLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.gameBackground}>
      <div className={styles.backgroundDecoration} />
      {children}
    </div>
  );
};

export default GameLayout;
