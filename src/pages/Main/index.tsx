import React from 'react';
import GameBackground from '../../components/GameBackground';
import styles from './index.scss';

const Main: React.FC = () => (
  <div className={styles.main}>
    <GameBackground>
      <div />
    </GameBackground>
  </div>
);

export default Main;
