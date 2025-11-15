import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Step1Pokemons() {
  return (
    <div className="flex flex-col h-full w-1/3  border-r border-[#3A4056]">
      <Link
        from={'/mains'}
        search={(prev) => ({ ...prev, pokemon: 'Bulbasaur' })}
        className="mx-4"
      >
        <div
          className={`flex flex-row gap-8 my-2 py-1 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-[#3A4056]/30 w-full`}
          onMouseEnter={() =>
            console.log(`pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
          }
        >
          <img
            src={`/assets/sprites/main/gifs/1.gif`}
            alt={'Bulbasaur'}
            className="h-[64px] w-[64px] object-scale-down"
          />
          <p className="text-xl font-bold flex-1">Bulbasaur - #001</p>
          <ChevronRight className="h-6 w-6" />
        </div>
      </Link>
      <Link
        from={'/mains'}
        search={(prev) => ({ ...prev, pokemon: 'Bulbasaur' })}
        className="mx-4"
      >
        <div
          className={`flex flex-row gap-8 my-2 py-1 px-6 rounded-md transition-all duration-300 ease-in-out cursor-pointer items-center hover:bg-[#3A4056]/30 w-full`}
          onMouseEnter={() =>
            console.log(`pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
          }
        >
          <img
            src={`/assets/sprites/main/gifs/1.gif`}
            alt={'Bulbasaur'}
            className="h-[64px] w-[64px] object-scale-down"
          />
          <p className="text-xl font-bold flex-1">Bulbasaur - #001</p>
          <ChevronRight className="h-6 w-6" />
        </div>
      </Link>
    </div>
  )
}
