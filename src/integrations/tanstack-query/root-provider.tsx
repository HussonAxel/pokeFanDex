import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Créer une seule instance de QueryClient partagée dans toute l'application
export const queryClient = new QueryClient()

export function getContext() {
  return {
    queryClient,
  }
}

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode
  queryClient: QueryClient
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
