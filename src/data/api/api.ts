import { useQuery, useQueryClient } from '@tanstack/react-query'
import { PokeAPI } from 'pokeapi-types'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const QUERY_KEYS = {
  POKEMONS: 'pokemons',
  POKEMONS_PER_GEN: 'pokemons-per-gen',
  POKEMON: 'pokemon',
  POKEMON_SPECIES: 'pokemon-species',
}

const STATIC_QUERY_OPTIONS = {
  staleTime: Infinity,
  gcTime: 1000 * 60 * 60 * 24 * 365,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
}

//──────────────────────────────────────────────────────────────────────────────
// FONCTIONS FETCH
//──────────────────────────────────────────────────────────────────────────────
//

export const fetchPokemons = async (limit: number, offset: number) => {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  )
  if (!response.ok) {
    throw new Error(`Error while fetching : ${response.statusText}`)
  }

  const data = (await response.json()) as PokeAPI.NamedAPIResourceList
  return data.results
}

export const fetchPokemon = async (name: string) => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`)
  if (!response.ok) {
    throw new Error(`Error while fetching pokemon: ${response.statusText}`)
  }
  const data = (await response.json()) as PokeAPI.Pokemon
  return data
}

export const fetchPokemonSpecies = async (name: string) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${name}`)
  if (!response.ok) {
    throw new Error(
      `Error while fetching the pokemon species: ${response.statusText}`,
    )
  }
  const data = (await response.json()) as PokeAPI.PokemonSpecies
  return data
}

//──────────────────────────────────────────────────────────────────────────────
// HOOKS DE RÉCUPÉRATION DE DONNÉES (useGet…)
//──────────────────────────────────────────────────────────────────────────────

export const useFetchPokemons = (limit: number, offset: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMONS_PER_GEN, limit, offset],
    queryFn: async () => await fetchPokemons(limit, offset),
    ...STATIC_QUERY_OPTIONS,
  })
}

export const useFetchPokemon = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON, name],
    queryFn: async () => await fetchPokemon(name),
    ...STATIC_QUERY_OPTIONS,
  })
}

export const useFetchPokemonSpecies = (name: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_SPECIES, name],
    queryFn: async () => await fetchPokemonSpecies(name),
    ...STATIC_QUERY_OPTIONS,
  })
}
//──────────────────────────────────────────────────────────────────────────────
// HOOKS DE PRÉFETCH (usePrefetch…)
//──────────────────────────────────────────────────────────────────────────────

export const usePrefetchPokemons = () => {
  const qc = useQueryClient()
  return (limit: number, offset: number) =>
    qc.ensureQueryData({
      queryKey: [QUERY_KEYS.POKEMONS_PER_GEN, limit, offset],
      queryFn: async () => await fetchPokemons(limit, offset),
      ...STATIC_QUERY_OPTIONS,
    })
}

export const usePrefetchPokemon = () => {
  const qc = useQueryClient()
  return (name: string) =>
    qc.ensureQueryData({
      queryKey: [QUERY_KEYS.POKEMON, name],
      queryFn: async () => await fetchPokemon(name),
      ...STATIC_QUERY_OPTIONS,
    })
}

export const usePrefetchPokemonSpecies = () => {
  const qc = useQueryClient()
  return (name: string) =>
    qc.ensureQueryData({
      queryKey: [QUERY_KEYS.POKEMON_SPECIES, name],
      queryFn: async () => await fetchPokemonSpecies(name),
      ...STATIC_QUERY_OPTIONS,
    })
}
