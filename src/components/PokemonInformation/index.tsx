import React from 'react';
import HP from '../HP';
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
  const gender = random.getRandomOfRange(0, 1)
    ? { text: '♂', color: '#65b2d5', shadow: '#2f70a8' }
    : { text: '♀', color: '#da8b71', shadow: '#af573c' };
  return (
    <div
      className={styles.main}
      style={{ ...position }}
    >
      <div className={styles.nameAndLevel}>
        <span>{name.slice(0, 11)}</span>
        <span>{`Lv ${random.getRandomOfRange(1, 99)}`}</span>
      </div>
      <span
        className={styles.gender}
        style={{
          color: gender.color,
          textShadow: `0.05em 0.05em ${gender.shadow}`,
        }}
      >
        {gender.text}
      </span>
    </div>
  );
};

export default PokemonInformation;
