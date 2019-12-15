import React from 'react';
import PokemonIcon from '../PokemonIcon';
import PokemonBall from '../PokemonBall';
import { pokeminProps } from '../MainPokemon';
import styles from './index.scss';

const SecondaryPokemon: React.FC<pokeminProps> = (props: pokeminProps) => {
  const { name, icon } = props;
  return (
    <div className={styles.main}>
      <div className={styles.mainDecoration}>
        <PokemonBall position={{ top: 0, left: -35 }} />
        <div className={styles.information}>
          <PokemonIcon pokemon={icon} />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPokemon;
