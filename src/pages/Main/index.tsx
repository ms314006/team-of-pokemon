import React from 'react';
import { Container } from 'nes-react';
import GameBackground from '../../components/GameBackground';
import Pokemons from '../../components/Pokemons';
import usePokemon from '../../hooks/usePokemon';
import PokemonContext from '../../contexts/PokemonContext';
import styles from './index.scss';

const Main: React.FC = () => {
  const pokemonControl = usePokemon();
  return (
    <div className={styles.main}>
      <Container>
        <GameBackground>
          <PokemonContext.Provider value={pokemonControl}>
            <Pokemons />
          </PokemonContext.Provider>
        </GameBackground>
      </Container>
    </div>
  );
};

export default Main;
