import { Link, useRouterState } from '@tanstack/react-router'
import PokeballLogo from './svg/pokeball-logo'
import { InputGroup, InputGroupInput, InputGroupAddon } from './ui/input-group'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  const isMainGames = currentPath.startsWith('/mains')
  const isFanGames = currentPath.startsWith('/fans')

  return (
    <>
      <header className="py-4 px-6 flex flex-row justify-between items-center bg-gray-800 text-white shadow-lg">
        <Link to="/" className="shrink-0">
          <PokeballLogo />
        </Link>
        <div className="flex items-center gap-8 flex-1 justify-center">
          {/* Segmented Control pour Main Games / Fan Games */}
          <nav className="flex items-center gap-1 bg-gray-700/50 p-1 rounded-lg">
            <Link
              to="/mains"
              className={cn(
                'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
                isMainGames
                  ? 'bg-gray-600 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50',
              )}
            >
              Main Games
            </Link>
            <Link
              to="/fans"
              className={cn(
                'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
                isFanGames
                  ? 'bg-gray-600 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50',
              )}
            >
              Fan Games
            </Link>
          </nav>
        </div>
        <div className="flex items-center shrink-0">
          {/* Recherche avec style pill arrondi */}
          <InputGroup className="w-80 rounded-full bg-gray-700/50 border-gray-600 focus-within:bg-gray-700 focus-within:border-gray-500">
            <InputGroupInput
              placeholder="Search a pokemon"
              className="rounded-full"
            />
            <InputGroupAddon align="inline-end">
              <Search className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </header>
    </>
  )
}
