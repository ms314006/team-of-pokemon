import React from 'react';
import styles from './index.scss'

interface HPProps {
  value: number
  mode: string
  position: {
    top: number;
    left: number;
  }
}

const HP: React.FC<HPProps> = (props: HPProps) => {
  const { position, mode, value } = props;
  const width = mode === 'main' ? 260 : 212;
  return (
    <div
      className={styles.main}
      style={{ ...position }}
    >
      <div>
        <div className={styles.hpBorder} style={{ width }}>
          <span>HP</span>
        </div>
        <div className={styles.displayHp} style={{ width: width - 44 }} />
      </div>
      <div className={styles.hpNumber} style={{ width }}>
        <span>{`${value}  /  ${value}`}</span>
      </div>
    </div>
  );
};

export default HP;
