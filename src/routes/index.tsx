import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-[calc(100dvh-68px)] bg-linear-to-t from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-5xl w-fit m-auto max-w-1/2 text-white text-center">
        Discover the full roster of Pokémon from the main series games—plus
        curated collections from standout fan projects like Pokémon Vanguard,
        with more on the way!
      </h1>
    </div>
  )
}
