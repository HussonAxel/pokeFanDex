import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import {
  useFetchPokemons,
  usePrefetchPokemon,
  usePrefetchPokemonSpecies,
} from '@/data/api/api'
import { generations } from '@/data/games/main/generations'
import { Route } from '@/routes/mains'
import { extractPokemonIdFromUrl } from '@/lib/utils'

export default function Step1Pokemons() {
  const search = Route.useSearch()
  const currentGeneration = generations.find(
    (generation) => generation.generation === search.generation,
  )

  const currentPokemon = search.pokemon
  const { data: pokemons } = useFetchPokemons(
    currentGeneration?.pokedexLength || 0,
    currentGeneration?.pokedexRange[0] || 0,
  )

  const prefetchpokemon = usePrefetchPokemon()
  const prefetchpokemonspecies = usePrefetchPokemonSpecies()
  return (
    <div className="flex flex-col h-full w-3/10  border-r border-[#3A4056] overflow-y-auto no-scrollbar">
      {pokemons?.map((pokemon) => {
        const isActive = currentPokemon === pokemon.name
        console.log(isActive)
        return (
          <Link
            from={'/mains'}
            search={(prev) => ({ ...prev, pokemon: pokemon.name })}
            className="mx-4"
            key={pokemon.name}
          >
            <div
              className={`flex flex-row gap-8 my-2 py-2 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-[#3A4056]/30 w-full ${isActive ? 'bg-[#3A4056]/50' : ''}`}
              onMouseEnter={() => {
                prefetchpokemon(pokemon.name)
                prefetchpokemonspecies(pokemon.name)
              }}
            >
              <img
                src={`
                https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${extractPokemonIdFromUrl(pokemon.url)}.png
                `}
                alt={
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                }
                className="h-[64px] w-[64px] object-scale-down"
              />
              <p className="text-xl font-bold flex-1 capitalize">
                {pokemon.name}
              </p>
              <ChevronRight className="h-6 w-6" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
