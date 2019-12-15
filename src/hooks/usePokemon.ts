import { useState } from 'react';
import pokemons from '../asset/pokemons';
import random from '../utils/random';

const usePokemon: any = () => {
  const ramdonGetTeamOfPokemon = () => {
    const teamOfPokemonName: string[] = [];
    const pokemonsName = Object.keys(pokemons);
    while (teamOfPokemonName.length !== 6) {
      const randomPokemonNo: number = random.getRandomOfRange(0, pokemonsName.length);
      const targetPokemonName: string = pokemonsName[randomPokemonNo];
      if (!teamOfPokemonName.includes(targetPokemonName)) {
        teamOfPokemonName.push(targetPokemonName);
      }
    }
    return teamOfPokemonName;
  };

  const [teamOfPokemons, setTeamOfPokemons] = useState(ramdonGetTeamOfPokemon());

  const getNewTeamOfPokemon = (): void => {
    setTeamOfPokemons(ramdonGetTeamOfPokemon());
  };

  return {
    teamOfPokemons,
    getNewTeamOfPokemon,
  };
};

export default usePokemon;
