import React from 'react';
import PokemonIcon from '../PokemonIcon';
import PokemonBall from '../PokemonBall';
import PokemonInformation from '../PokemonInformation';
import HP from '../HP';
import { pokeminProps } from '../MainPokemon';
import styles from './index.scss';

const SecondaryPokemon: React.FC<pokeminProps> = (props: pokeminProps) => {
  const {
    pokemon: {
      name, icon, gender, level, HP: HPValue,
    },
  } = props;
  return (
    <div className={styles.main}>
      <div className={styles.mainDecoration}>
        <PokemonBall position={{ top: 0, left: -35 }} />
        <div className={styles.information}>
          <PokemonIcon pokemon={icon} />
          <PokemonInformation
            name={name}
            level={level}
            gender={gender}
            position={{ top: 10, left: 88 }}
          />
          <HP value={HPValue} mode="secondary" position={{ top: 12, left: 300 }} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryPokemon;
