import React from 'react';
import styles from './index.scss';

interface PokemonBallProps {
  position: {
    top: number;
    left: number;
  }
}

const PokemonBall: React.FC<PokemonBallProps> = (props: PokemonBallProps) => {
  const { position: { top, left } } = props;
  return (
    <div
      className={styles.pokemonBall}
      style={{ top, left }}
    >
      <div className={styles.centerOfPokemonBall} />
      <div className={styles.topOfPokemonBall} />
      <div className={styles.bottomOfPokemonBall} />
    </div>
  );
};

export default PokemonBall;
