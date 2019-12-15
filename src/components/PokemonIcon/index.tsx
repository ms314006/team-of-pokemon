import React from 'react';
import styles from './index.scss';

interface PokeminIconProps {
  pokemon: string
}

const PokemonIcon = (props: PokeminIconProps) => {
  const { pokemon } = props;
  return (
    <img
      className={styles.pokemonIcon}
      alt={pokemon}
      src={`https://img.pokemondb.net/sprites/sun-moon/icon/${pokemon}.png`}
    />
  );
};

export default PokemonIcon;
