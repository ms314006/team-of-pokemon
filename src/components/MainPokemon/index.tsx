import React from 'react';
import PokemonIcon from '../PokemonIcon';
import PokemonBall from '../PokemonBall';
import PokemonInformation from '../PokemonInformation';
import HP from '../HP';
import styles from './index.scss';

export interface pokeminProps {
  pokemon: {
    name: string;
    icon: string;
    gender: number,
    level: number,
    HP: number,
  }
}

const MainPokemon: React.FC<pokeminProps> = (props: pokeminProps) => {
  const {
    pokemon: {
      name, icon, gender, level, HP: HPValue,
    },
  } = props;
  return (
    <div className={styles.main}>
      <div className={styles.mainDecoration}>
        <PokemonBall position={{ top: -30, left: -30 }} />
        <div className={styles.information}>
          <PokemonIcon pokemon={icon} />
          <PokemonInformation
            name={name}
            level={level}
            gender={gender}
            position={{ top: 36, left: 80 }}
          />
          <HP value={HPValue} mode="main" position={{ top: 100, left: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default MainPokemon;
