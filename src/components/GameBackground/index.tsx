import React from 'react';
import styles from './index.scss';

const GameBackground: React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.gameBackground}>
      <div className={styles.backgroundDecoration} />
      {children}
    </div>
  );
};

export default GameBackground;
