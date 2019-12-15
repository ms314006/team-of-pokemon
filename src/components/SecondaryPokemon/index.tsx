import React from 'react';
import PokemonIcon from '../PokemonIcon';
import { pokeminProps } from '../MainPokemon';
import styles from './index.scss';

const SecondaryPokemon = (props: pokeminProps) => {
  const { name, icon } = props;
  return (
    <div className={styles.main}>
      <div className={styles.mainDecoration}>
        <div className={styles.information}>
          <PokemonIcon pokemon={icon} />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPokemon;
