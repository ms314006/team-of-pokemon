import React from 'react';
import random from '../../utils/random';
import styles from './index.scss';

interface PokemonInformationProps {
  name: string
  position: {
    top: number
    left: number
  }
}

const PokemonInformation: React.FC<PokemonInformationProps> = (props: PokemonInformationProps) => {
  const { name, position } = props;
  return (
    <div
      className={styles.main}
      style={{ ...position }}
    >
      <div className={styles.nameAndLevel}>
        <span>{name.slice(0, 11)}</span>
        <span>{`Lv ${random.getRandomOfRange(1, 99)}`}</span>
      </div>
      <span className={styles.gender}>♀</span>
    </div>
  );
};

export default PokemonInformation;
