import React from 'react';
import styles from './index.scss';

interface PokeminIconProps {
  pokemon: string
}

const PokemonIcon = (props: PokeminIconProps) => {
  const { pokemon } = props;
  return (
    <div className={styles.main}>
      <img
        className={styles.pokemonIcon}
        alt={pokemon}
        src={`https://img.pokemondb.net/sprites/sun-moon/icon/${pokemon}.png`}
      />
    </div>
  );
};

export default PokemonIcon;
