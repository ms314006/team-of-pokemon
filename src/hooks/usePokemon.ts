import { useState } from 'react';
import pokemons from '../asset/pokemons';
import random from '../utils/random';

const usePokemon: any = () => {
  const ramdonGetTeamOfPokemon = () => {
    const teamOfPokemonName: string[] = [];
    const pokemonsName = Object.keys(pokemons);
    while (teamOfPokemonName.length !== 6) {
      const randomPokemonNo: number = random.getRandomOfRange(0, pokemonsName.length - 1);
      const targetPokemonName: string = pokemonsName[randomPokemonNo];
      if (!teamOfPokemonName.includes(targetPokemonName)) {
        teamOfPokemonName.push(targetPokemonName);
      }
    }
    return teamOfPokemonName;
  };

  const addPokemonInformation = (pokemon: string) => {
    const level = random.getRandomOfRange(1, 99);
    const HPScale = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7];
    const HP = Math.floor((level + 10) * HPScale[random.getRandomOfRange(0, HPScale.length - 1)]);
    const gender = random.getRandomOfRange(0, 1);
    return {
      name: pokemon,
      icon: pokemons[pokemon],
      gender,
      level,
      HP,
    };
  };

  const [teamOfPokemons, setTeamOfPokemons] = useState(
    ramdonGetTeamOfPokemon().map(addPokemonInformation),
  );

  const getNewTeamOfPokemon = (): void => {
    setTeamOfPokemons(
      ramdonGetTeamOfPokemon().map(addPokemonInformation),
    );
  };

  return {
    teamOfPokemons,
    getNewTeamOfPokemon,
  };
};

export default usePokemon;
