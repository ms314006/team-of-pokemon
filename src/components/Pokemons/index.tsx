import React, { useContext } from 'react';
import PokemonContext from '../../contexts/PokemonContext';

const Pokemons: React.FC = () => {
  const { teamOfPokemons } = useContext(PokemonContext);
  return (
    <div>
      {
        teamOfPokemons.map((pokemon: string) => (
          <span key={pokemon}>{pokemon}</span>
        ))
      }
    </div>
  );
};

export default Pokemons;
