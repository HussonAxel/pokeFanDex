import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { Route } from '@/routes/mains'

import { useFetchPokemon } from '@/data/api/api'
import { extractPokemonIdFromUrl } from '@/lib/utils'

export default function Step2PokemonDetail() {
  const search = Route.useSearch()
  const currentPokemon = search.pokemon
  const { data: pokemon } = useFetchPokemon(currentPokemon || '')

  return (
    <article className="flex flex-col flex-1 h-full overflow-y-auto no-scrollbar">
      <div className="w-full p-6">
        <Tabs defaultValue="biography">
          <div className="border-b border-[#3A4056]/50 w-full mb-6">
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
            <div className="flex flex-col gap-6">
              {/* Carte pour l'artwork du Pokémon */}
              <Card className="overflow-hidden">
                <div
                  className={`w-full pokemon-type-${pokemon?.types?.[0]?.type?.name} flex items-center justify-center p-8`}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/${extractPokemonIdFromUrl(pokemon?.species?.url || '')}.png`}
                    alt="Pokemon"
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-row justify-between items-center">
                    <CardTitle className="text-3xl font-bold capitalize">
                      {pokemon?.name}
                    </CardTitle>
                    <p className="text-xl font-light text-muted-foreground">
                      #{extractPokemonIdFromUrl(pokemon?.species?.url || '')}
                    </p>
                  </div>
                </CardHeader>
              </Card>

              {/* Carte pour les métadonnées */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Created</span>
                      <span className="text-foreground font-medium">
                        May 2024
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Client</span>
                      <span className="text-foreground font-medium">
                        Self-initiated
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Tags</span>
                      <span className="text-foreground font-medium">
                        Bold, Experimental
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsPanel>
          <TabsPanel value="miscellaneous">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-md text-muted-foreground">
                  Tab 2 content
                </p>
              </CardContent>
            </Card>
          </TabsPanel>
          <TabsPanel value="stats">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-md text-muted-foreground">
                  Tab 3 content
                </p>
              </CardContent>
            </Card>
          </TabsPanel>
          <TabsPanel value="move-pool">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-md text-muted-foreground">
                  Tab 4 content
                </p>
              </CardContent>
            </Card>
          </TabsPanel>
          <TabsPanel value="sprites">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-md text-muted-foreground">
                  Tab 5 content
                </p>
              </CardContent>
            </Card>
          </TabsPanel>
          <TabsPanel value="tcg-cards">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-md text-muted-foreground">
                  Tab 6 content
                </p>
              </CardContent>
            </Card>
          </TabsPanel>
        </Tabs>
      </div>
    </article>
  )
}
