import React from 'react';
import styles from './index.scss';

interface PokemonInformationProps {
  name: string
  level: number
  gender: number
  position: {
    top: number
    left: number
  }
}

const PokemonInformation: React.FC<PokemonInformationProps> = (props: PokemonInformationProps) => {
  const {
    name, level, gender, position,
  } = props;
  const genderInformation = gender
    ? { text: '♂', color: '#65b2d5', shadow: '#2f70a8' }
    : { text: '♀', color: '#da8b71', shadow: '#af573c' };
  return (
    <div
      className={styles.main}
      style={{ ...position }}
    >
      <div className={styles.nameAndLevel}>
        <span>{name.slice(0, 11)}</span>
        <span>{`Lv ${level}`}</span>
      </div>
      <span
        className={styles.gender}
        style={{
          color: genderInformation.color,
          textShadow: `0.05em 0.05em ${genderInformation.shadow}`,
        }}
      >
        {genderInformation.text}
      </span>
    </div>
  );
};

export default PokemonInformation;
