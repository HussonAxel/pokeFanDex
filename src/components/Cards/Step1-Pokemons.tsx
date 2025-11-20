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
    <div className="flex flex-col h-full w-[28%] border-r border-[#3A4056]/50 overflow-y-auto no-scrollbar bg-slate-900/30">
      <div className="p-6">
        {pokemons?.map((pokemon) => {
          const isActive = currentPokemon === pokemon.name
          return (
            <Link
              from={'/mains'}
              search={(prev) => ({ ...prev, pokemon: pokemon.name })}
              className="block"
              key={pokemon.name}
            >
              <div
                className={`flex flex-row gap-4 my-2 py-3 px-4 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-white/5 w-full font-semibold ${
                  isActive ? 'bg-white/10' : 'bg-transparent'
                }`}
                onMouseEnter={() => {
                  prefetchpokemon(pokemon.name)
                  prefetchpokemonspecies(pokemon.name)
                }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${extractPokemonIdFromUrl(pokemon.url)}.png`}
                  alt={
                    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                  }
                  className="h-14 w-14 object-scale-down shrink-0"
                />
                <p className="flex-1 capitalize truncate text-lg">
                  {pokemon.name}
                </p>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
