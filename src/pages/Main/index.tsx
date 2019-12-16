import React from 'react';
import { Container } from 'nes-react';
import GameLayout from '../../components/GameLayout';
import Pokemons from '../../components/Pokemons';
import GenerateTeamBtn from '../../components/GenerateTeamBtn';
import MessageBox from '../../components/MessageBox';
import usePokemon from '../../hooks/usePokemon';
import PokemonContext from '../../contexts/PokemonContext';
import styles from './index.scss';

const Main: React.FC = () => {
  const pokemonControl = usePokemon();
  return (
    <div className={styles.main}>
      <Container>
        <GameLayout>
          <PokemonContext.Provider value={pokemonControl}>
            <Pokemons />
            <GenerateTeamBtn />
          </PokemonContext.Provider>
          <MessageBox message="Random your team of dream!" />
        </GameLayout>
      </Container>
    </div>
  );
};

export default Main;
