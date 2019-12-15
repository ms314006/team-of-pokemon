import React from 'react';
import PokemonIcon from '../PokemonIcon';
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
        <PokemonIcon pokemon={icon} />
        {name}
      </div>
    </div>
  );
};

export default MainPokemon;
