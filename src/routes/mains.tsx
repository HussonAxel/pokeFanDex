import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'

import { generations } from '@/data/games/main/generations'
import Step1Pokemons from '@/components/Cards/Step1-Pokemons'
import z from 'zod'
import Step2PokemonDetail from '@/components/Cards/Step2-PokemonDetail'

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
      <div className="flex flex-col pb-4 h-full w-1/3 border-r border-[#3A4056] overflow-y-auto no-scrollbar">
        {generations.map((generation) => {
          const isActive = currentGeneration === generation.generation
          return (
            <Link
              key={generation.generation}
              from={Route.fullPath}
              search={() => ({
                generation: generation.generation,
              })}
              className="mx-4"
            >
              <div
                className={`flex flex-row gap-8 my-2 py-1 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-[#3A4056]/30 w-full ${
                  isActive ? 'bg-[#3A4056]/50' : ''
                }`}
                onMouseEnter={() =>
                  console.log(
                    `pokeapi.co/api/v2/pokemon?limit=${generation.pokedexLength}&offset=${generation.pokedexRange[0]}`,
                  )
                }
              >
                {generation.generation !== '0' ? (
                  // <img
                  //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/showdown/${randomPokemonIds[generation.generation]}.gif`}
                  //   alt={generation.title}
                  //   className="h-[48px] w-[48px] object-scale-down"
                  // />
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon//${randomPokemonIds[generation.generation]}.png`}
                    alt={generation.title}
                    className="h-[64px] w-[64px]"
                  />
                ) : (
                  <div className="h-[64px] w-[64px]" />
                )}

                <p className="text-xl font-bold flex-1">
                  Gen {generation.generation} - {generation.title}
                </p>
                <ChevronRight className="h-6 w-6" />
              </div>
            </Link>
          )
        })}
      </div>
      {search.generation && <Step1Pokemons />}
      {search.pokemon && <Step2PokemonDetail />}
    </div>
  )
}
