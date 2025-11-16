import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractPokemonIdFromUrl = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/?$/)
  return match ? parseInt(match[1], 10) : null
}
