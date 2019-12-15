import React from 'react';
import PokemonIcon from '../PokemonIcon';
import PokemonBall from '../PokemonBall';
import styles from './index.scss';

export interface pokeminProps {
  name: string;
  icon: string;
}

const MainPokemon: React.FC<any> = (props: pokeminProps) => {
  const { name, icon } = props;
  return (
    <div className={styles.main}>
      <div className={styles.mainDecoration}>
        <PokemonBall position={{ top: -30, left: -30 }} />
        <div className={styles.information}>
          <PokemonIcon pokemon={icon} />
          {name}
        </div>
      </div>
    </div>
  );
};

export default MainPokemon;
