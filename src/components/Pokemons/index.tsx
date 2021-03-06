import React, { useContext } from 'react';
import MainPokemon from '../MainPokemon';
import SecondaryPokemon from '../SecondaryPokemon';
import PokemonContext from '../../contexts/PokemonContext';
import pokemons from '../../asset/pokemons';
import styles from './index.scss';

const Pokemons: React.FC = () => {
  const { teamOfPokemons } = useContext(PokemonContext);
  return (
    <div className={styles.main}>
      <div className={styles.mainPokemon}>
        <MainPokemon
          pokemon={teamOfPokemons[0]}
        />
      </div>
      <div className={styles.secondaryPokemon}>
        {
          teamOfPokemons.slice(1).map((pokemon: any) => (
            <SecondaryPokemon
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Pokemons;
