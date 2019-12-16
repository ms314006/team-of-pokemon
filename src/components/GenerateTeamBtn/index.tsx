import React, { useContext } from 'react';
import PokemonBall from '../PokemonBall';
import PokemonContext from '../../contexts/PokemonContext';
import styles from './index.scss';

const GenerateTeamBtn = () => {
  const { getNewTeamOfPokemon } = useContext(PokemonContext);
  return (
    <div className={styles.main}>
      <PokemonBall position={{ top: -10, left: -48 }} />
      <button
        type="button"
        className={styles.generateButton}
        onClick={getNewTeamOfPokemon}
      >
        Generate new team!
      </button>
    </div>
  );
};

export default GenerateTeamBtn;
