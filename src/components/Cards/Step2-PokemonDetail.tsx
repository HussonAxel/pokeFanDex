import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs'
import { Link } from '@tanstack/react-router'
import { Route } from '@/routes/mains'

import { useFetchPokemon, useFetchPokemonSpecies } from '@/data/api/api'
import { extractPokemonIdFromUrl } from '@/lib/utils'

export default function Step2PokemonDetail() {
  const search = Route.useSearch()
  const currentPokemon = search.pokemon
  const { data: pokemon } = useFetchPokemon(currentPokemon || '')
  const { data: pokemonSpecies } = useFetchPokemonSpecies(currentPokemon || '')

  console.log(pokemon)
  console.log(pokemonSpecies)
  return (
    <article className="flex flex-col w-4/10 h-full">
      <div className="w-full h-[64px] mx-auto">
        <Tabs defaultValue="biography">
          <div className="border-b w-full m-auto">
            <TabsList variant="underline">
              <TabsTab value="biography">
                <Link
                  to="/mains"
                  search={(prev) => ({ ...prev, tab: 'biography' })}
                >
                  Biography
                </Link>
              </TabsTab>
              <TabsTab value="miscellaneous">Miscellaneous</TabsTab>
              <TabsTab value="stats">Stats</TabsTab>
              <TabsTab value="move-pool">Move Pool</TabsTab>
              <TabsTab value="sprites">Sprites</TabsTab>
              <TabsTab value="tcg-cards">TCG Cards</TabsTab>
            </TabsList>
          </div>
          <TabsPanel value="biography">
            <div className="flex flex-col pt-4 h-full w-full max-w-4/5 mx-auto">
              <div
                className={`w-full h-1/2 pokemon-type-${pokemon?.types?.[0]?.type?.name} mx-auto rounded-lg shadow-lg flex items-center justify-center`}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${extractPokemonIdFromUrl(pokemon?.species?.url || '')}.png`}
                  alt="Pokemon"
                  className="w-2/5 h-2/5 object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-between items-center">
                  <p className=" text-2xl font-bold capitalize">
                    {pokemon?.name}
                  </p>
                  <p className=" text-xl font-light text-muted-foreground">
                    #{extractPokemonIdFromUrl(pokemon?.species?.url || '')}
                  </p>
                </div>
                <div className="w-full max-w-md space-y-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Created</span>
                    <span className="text-foreground">May 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client</span>
                    <span className="text-foreground">Self-initiated</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tags</span>
                    <span className="text-foreground">Bold, Experimental</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsPanel>
          <TabsPanel value="miscellaneous">
            <p className="p-4 text-center text-md text-muted-foreground">
              Tab 2 content
            </p>
          </TabsPanel>
          <TabsPanel value="stats">
            <p className="p-4 text-center text-md text-muted-foreground">
              Tab 3 content
            </p>
          </TabsPanel>
          <TabsPanel value="move-pool">
            <p className="p-4 text-center text-md text-muted-foreground">
              Tab 4 content
            </p>
          </TabsPanel>
          <TabsPanel value="sprites">
            <p className="p-4 text-center text-md text-muted-foreground">
              Tab 5 content
            </p>
          </TabsPanel>
          <TabsPanel value="tcg-cards">
            <p className="p-4 text-center text-md text-muted-foreground">
              Tab 6 content
            </p>
          </TabsPanel>
        </Tabs>{' '}
      </div>
    </article>
  )
}
