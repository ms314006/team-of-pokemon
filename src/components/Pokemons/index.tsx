import React, { useContext } from 'react';
import MainPokemin from '../MainPokemon';
import SecondaryPokemon from '../SecondaryPokemon';
import PokemonContext from '../../contexts/PokemonContext';
import pokemons from '../../asset/pokemons';
import styles from './index.scss';

const Pokemons: React.FC = () => {
  const { teamOfPokemons } = useContext(PokemonContext);
  return (
    <div className={styles.main}>
      <div className={styles.mainPokemon}>
        <MainPokemin
          name={teamOfPokemons.slice(0, 1)}
          icon={pokemons[teamOfPokemons.slice(0, 1)]}
        />
      </div>
      <div className={styles.secondaryPokemon}>
        {
          teamOfPokemons.slice(1).map((pokemon: string) => (
            <SecondaryPokemon
              key={pokemon}
              name={pokemon}
              icon={pokemons[pokemon]}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Pokemons;