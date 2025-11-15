import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs'
import { Link } from '@tanstack/react-router'

export default function Step2PokemonDetail() {
  return (
    <article className="flex flex-col w-1/3 h-full">
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
              <div className="w-full h-1/2 pokemon-type-grass mx-auto rounded-lg shadow-lg flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/official-artwork/1.png"
                  alt="Pokemon"
                  className="w-2/4 h-2/4 object-scale-down mx-auto"
                />
              </div>
              <div className="flex flex-col mt-4">
                <p className=" text-lg font-bold">Bulbasaur</p>
                <p className=" text-md text-muted-foreground">#001</p>
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
