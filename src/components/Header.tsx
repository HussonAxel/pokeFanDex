import { Link } from '@tanstack/react-router'
import PokeballLogo from './svg/pokeball-logo'
import { InputGroup, InputGroupInput, InputGroupAddon } from './ui/input-group'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <>
      <header className="py-4 px-8 flex flex-row justify-between items-center bg-gray-800 text-white shadow-lg">
        <Link to="/">
          <PokeballLogo />
        </Link>
        <div className="flex items-center gap-12">
          <nav className="flex gap-8  text-nowrap">
            <div className="relative">
              <Link
                to="/mains"
                className="relative group inline-block transition-all duration-300 ease-in-out hover:text-green/80 text-md tracking-wider font-medium"
              >
                Main Games
              </Link>
            </div>
            <div className="relative">
              <Link
                to="/fans"
                className="relative group inline-block transition-all duration-300 ease-in-out hover:text-green/80 text-md tracking-wider font-medium"
              >
                Fan Games
              </Link>
            </div>
          </nav>
          <InputGroup>
            <InputGroupInput placeholder="Search a pokemon" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>{' '}
        </div>
      </header>
    </>
  )
}
