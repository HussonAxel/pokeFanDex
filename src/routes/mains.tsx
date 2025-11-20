import { createFileRoute, Link } from '@tanstack/react-router'
import z from 'zod'
import { useMemo } from 'react'

import Step2PokemonDetail from '@/components/Cards/Step2-PokemonDetail'
import Step1Pokemons from '@/components/Cards/Step1-Pokemons'
import { generations } from '@/data/games/main/generations'

import { usePrefetchPokemons } from '@/data/api/api'

export const Route = createFileRoute('/mains')({
  component: RouteComponent,
  validateSearch: z.object({
    generation: z.string().optional(),
    pokemon: z.string().optional(),
    tab: z
      .enum([
        'biography',
        'miscellaneous',
        'stats',
        'move-pool',
        'sprites',
        'tcg-cards',
      ])
      .optional(),
  }),
})

function RouteComponent() {
  const prefetchPokemons = usePrefetchPokemons()

  const search = Route.useSearch()
  const currentGeneration = search.generation

  const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
  }

  // Mémoriser les IDs aléatoires pour chaque génération
  const randomPokemonIds = useMemo(() => {
    const ids: Record<string, number> = {}
    generations.forEach((generation) => {
      if (generation.generation !== '0') {
        ids[generation.generation] = getRandomInteger(
          Number(generation.pokedexRange[0]),
          Number(generation.pokedexRange[1]),
        )
      }
    })
    return ids
  }, [])

  return (
    <div className="h-[calc(100dvh-68px)] flex bg-linear-to-t from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="flex flex-col h-full w-[18%] border-r border-[#3A4056]/50 overflow-y-auto no-scrollbar bg-slate-900/50">
        <div className="p-6">
          {generations.map((generation) => {
            const isActive = currentGeneration === generation.generation
            return (
              <Link
                key={generation.generation}
                from={Route.fullPath}
                search={() => ({
                  generation: generation.generation,
                })}
                className="block"
                resetScroll={true}
              >
                <div
                  className={`relative flex flex-row gap-4 my-2 py-3 px-4 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-white/5 w-full font-semibold ${
                    isActive ? 'bg-white/10' : 'bg-transparent'
                  }`}
                  onMouseEnter={() =>
                    prefetchPokemons(
                      generation.pokedexLength,
                      generation.pokedexRange[0],
                    )
                  }
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full" />
                  )}
                  {generation.generation !== '0' ? (
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${randomPokemonIds[generation.generation]}.png`}
                      alt={generation.title}
                      className="h-12 w-12 shrink-0"
                    />
                  ) : (
                    <div className="h-12 w-12 shrink-0" />
                  )}

                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="flex-1 truncate text-lg">
                      {generation.generation !== '0'
                        ? `Generation ${generation.generation}`
                        : generation.title}
                    </p>
                    {generation.generation !== '0' && (
                      <p className="text-muted-foreground truncate text-md">
                        {generation.title}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {/* Colonne 2: Liste Pokémon - 25-30% */}
      {search.generation && <Step1Pokemons />}
      {/* Colonne 3: Détails - reste de l'espace */}
      {search.pokemon && <Step2PokemonDetail />}
    </div>
  )
}
