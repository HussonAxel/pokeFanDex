# Structure du Projet - pokeFanDex

## Vue d'ensemble

**pokeFanDex** est une application web React/TypeScript moderne qui permet de découvrir et explorer les Pokémon des jeux principaux de la série Pokémon ainsi que des projets de fans comme Pokémon Vanguard. L'application utilise une stack technologique moderne basée sur TanStack pour le routing, la gestion d'état, et la gestion des données.

## Technologies principales

### Framework & Build

- **React 19.2.0** - Bibliothèque UI
- **TypeScript 5.9.3** - Typage statique
- **Vite 7.2.2** - Build tool et dev server
- **TanStack Start** - Framework full-stack React

### Routing & Navigation

- **@tanstack/react-router** (v1.135.2) - Routing basé sur les fichiers
- **@tanstack/react-router-devtools** - Outils de développement pour le router

### Gestion des données

- **@tanstack/react-query** (v5.90.8) - Gestion des requêtes et cache
- **@tanstack/react-db** (v0.1.44) - Base de données locale
- **@tanstack/db** (v0.5.0) - Core de la base de données
- **@tanstack/query-db-collection** - Intégration Query + DB

### UI & Styling

- **Tailwind CSS 4.1.17** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI (via Radix UI)
- **Radix UI** - Composants accessibles (Label, Select, Slider, Switch)
- **lucide-react** - Icônes
- **class-variance-authority** - Gestion des variantes de classes

### State Management

- **@tanstack/react-store** (v0.7.7) - Gestion d'état réactive
- **@tanstack/store** - Core du store

### Formulaires

- **@tanstack/react-form** (v1.25.0) - Gestion de formulaires
- **zod** (v4.1.12) - Validation de schémas

### DevTools

- **@tanstack/react-devtools** - DevTools unifiés
- **@tanstack/react-query-devtools** - DevTools pour React Query
- **@tanstack/devtools-vite** - Plugin Vite pour DevTools

## Structure des dossiers

```
pokeFanDex/
├── public/                          # Assets statiques
│   ├── assets/
│   │   └── sprites/
│   │       └── vanguard/            # Sprites Pokémon Vanguard
│   │           ├── Back/
│   │           ├── Back shiny/
│   │           ├── Front/
│   │           ├── Front shiny/
│   │           ├── Icons/
│   │           ├── Moves/
│   │           └── Types/
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/                 # Composants React réutilisables
│   │   ├── Cards/
│   │   │   └── Step1-IP.tsx         # Composant de carte (exemple)
│   │   ├── Header.tsx               # En-tête de l'application
│   │   ├── svg/
│   │   │   └── pokeball-logo.tsx    # Logo Pokéball SVG
│   │   └── ui/                      # Composants UI shadcn
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── input-group.tsx
│   │       ├── label.tsx
│   │       ├── select.tsx
│   │       ├── slider.tsx
│   │       ├── switch.tsx
│   │       └── textarea.tsx
│   │
│   ├── data/                        # Données statiques
│   │   ├── games/
│   │   │   ├── main/
│   │   │   │   └── generations.ts   # Données des générations Pokémon
│   │   │   └── vanguard/
│   │   │       ├── data/            # Fichiers JSON/TXT de données Vanguard
│   │   │       │   ├── abilities.json
│   │   │       │   ├── config.json
│   │   │       │   ├── encounters.json
│   │   │       │   ├── moves.json
│   │   │       │   ├── pokemon.json
│   │   │       │   ├── pokemon_forms.json
│   │   │       │   ├── pokemon_master.json
│   │   │       │   ├── types.json
│   │   │       │   └── ...
│   │   │       └── images/
│   │   ├── demo-table-data.ts
│   │   └── demo.punk-songs.ts
│   │
│   ├── db-collections/              # Collections de base de données
│   │   ├── index.ts                 # Collection de messages (exemple)
│   │   └── pokeAPI-collections.tsx  # Collections pour l'API Pokémon
│   │
│   ├── hooks/                       # Hooks React personnalisés
│   │   ├── demo.form-context.ts
│   │   ├── demo.form.ts
│   │   └── demo.useChat.ts
│   │
│   ├── integrations/                # Intégrations de services
│   │   └── tanstack-query/
│   │       ├── devtools.tsx         # Configuration des DevTools
│   │       └── root-provider.tsx    # Provider React Query
│   │
│   ├── lib/                         # Utilitaires et helpers
│   │   ├── utils.ts                 # Fonctions utilitaires (cn, etc.)
│   │   ├── demo-store.ts            # Exemple de store
│   │   └── demo-store-devtools.tsx  # DevTools pour le store
│   │
│   ├── routes/                      # Routes de l'application (file-based routing)
│   │   ├── __root.tsx               # Route racine avec layout
│   │   ├── index.tsx                # Page d'accueil (/)
│   │   ├── fans.tsx                 # Page des jeux de fans (/fans)
│   │   ├── mains.tsx                # Page des jeux principaux (/mains)
│   │   ├── routeTree.gen.ts         # Arbre de routes généré automatiquement
│   │   └── demo/                    # Fichiers de démonstration (peuvent être supprimés)
│   │       ├── api.names.ts
│   │       ├── db-chat.tsx
│   │       ├── form.address.tsx
│   │       ├── form.simple.tsx
│   │       ├── start.api-request.tsx
│   │       ├── store.tsx
│   │       ├── table.tsx
│   │       └── tanstack-query.tsx
│   │
│   ├── router.tsx                   # Configuration du router
│   ├── styles.css                   # Styles globaux
│   └── logo.svg
│
├── .cursorrules                     # Règles pour Cursor AI
├── components.json                  # Configuration shadcn/ui
├── eslint.config.js                 # Configuration ESLint
├── package.json                     # Dépendances et scripts
├── prettier.config.js               # Configuration Prettier
├── tsconfig.json                    # Configuration TypeScript
└── vite.config.ts                   # Configuration Vite
```

## Architecture de l'application

### Routing (TanStack Router)

Le routing est basé sur les fichiers dans `src/routes/`. Chaque fichier `.tsx` dans ce dossier devient automatiquement une route.

**Routes principales :**

- `/` (index.tsx) - Page d'accueil avec description du projet
- `/mains` (mains.tsx) - Page pour les jeux principaux de Pokémon
- `/fans` (fans.tsx) - Page pour les jeux de fans (comme Vanguard)

**Layout racine :**
Le fichier `__root.tsx` définit le layout global de l'application avec :

- Le composant `<Header />` présent sur toutes les pages
- Les DevTools TanStack intégrés
- La configuration du contexte React Query

### Gestion des données

**React Query :**

- Configuration dans `src/integrations/tanstack-query/root-provider.tsx`
- QueryClient partagé dans toute l'application
- Intégration SSR avec `@tanstack/react-router-ssr-query`

**TanStack DB :**

- Collections définies dans `src/db-collections/`
- Exemple : collection de messages avec schéma Zod
- Utilise `@tanstack/react-db` pour l'accès depuis les composants

### Composants UI

**shadcn/ui :**

- Composants installés via `pnpx shadcn@latest add [component]`
- Composants disponibles : Button, Input, Select, Slider, Switch, Textarea, Label
- Personnalisables via Tailwind CSS

**Composants personnalisés :**

- `Header.tsx` - Navigation principale avec recherche
- `Step1-IP.tsx` - Composant de carte (en développement)
- `pokeball-logo.tsx` - Logo SVG personnalisé

### Données

**Jeux principaux :**

- Générations définies dans `src/data/games/main/generations.ts`
- Contient les informations sur les 9 générations (Kanto à Paldea)
- Chaque génération a : titre, slug, sous-titre, longueur du Pokédex, plage d'IDs

**Jeux de fans (Vanguard) :**

- Données JSON dans `src/data/games/vanguard/data/`
- Fichiers incluant : pokemon, abilities, moves, types, encounters, etc.
- Sprites dans `public/assets/sprites/vanguard/`

## Gestion détaillée : Routes, Collections et Clients

### Gestion des Routes (TanStack Router)

#### Configuration du Router

Le router est configuré dans `src/router.tsx` avec une fonction `getRouter()` qui :

1. **Récupère le contexte React Query** :

```typescript
const rqContext = TanstackQuery.getContext()
```

- Cette fonction retourne un objet contenant le `queryClient` partagé

2. **Crée le router avec contexte** :

```typescript
const router = createRouter({
  routeTree,                    // Arbre de routes généré automatiquement
  context: { ...rqContext },    // Contexte partagé avec toutes les routes
  defaultPreload: 'intent',     // Préchargement au survol (intent)
  Wrap: (props) => {            // Wrapper pour le Provider React Query
    return (
      <TanstackQuery.Provider {...rqContext}>
        {props.children}
      </TanstackQuery.Provider>
    )
  },
})
```

3. **Intègre React Query avec SSR** :

```typescript
setupRouterSsrQueryIntegration({
  router,
  queryClient: rqContext.queryClient,
})
```

- Permet le Server-Side Rendering avec React Query
- Synchronise les données entre serveur et client

#### Structure des Routes

**File-based Routing :**

- Chaque fichier dans `src/routes/` devient automatiquement une route
- Le nom du fichier détermine le chemin de la route
- `routeTree.gen.ts` est généré automatiquement par TanStack Router

**Exemple de route simple :**

```typescript
// src/routes/fans.tsx
export const Route = createFileRoute('/fans')({
  component: RouteComponent,
})
```

**Route racine (`__root.tsx`) :**

- Utilise `createRootRouteWithContext<MyRouterContext>()`
- Définit le contexte TypeScript pour le router
- Le contexte doit contenir `queryClient: QueryClient`
- Configure le layout global avec `<Header />` et DevTools
- Utilise `shellComponent` pour le document HTML complet

**Accès au contexte dans les routes :**

```typescript
// Dans une route, vous pouvez accéder au contexte via :
const { queryClient } = Route.useRouteContext()
```

#### Préchargement des Routes

- `defaultPreload: 'intent'` : Les routes sont préchargées quand l'utilisateur survole un lien
- Améliore les performances perçues
- Les données peuvent être préchargées via les `loader` des routes

#### Loaders de Routes (optionnel)

Les routes peuvent définir des `loader` pour charger des données avant le rendu :

```typescript
export const Route = createFileRoute('/example')({
  loader: async () => {
    // Charger les données ici
    return data
  },
  component: () => {
    const data = Route.useLoaderData()
    // Utiliser les données
  },
})
```

### Gestion du QueryClient (React Query)

#### Configuration du Client

**Fichier : `src/integrations/tanstack-query/root-provider.tsx`**

1. **Instance unique du QueryClient** :

```typescript
export const queryClient = new QueryClient()
```

- Créé une seule fois au niveau module
- Partagé dans toute l'application
- Peut être configuré avec des options par défaut

2. **Fonction `getContext()`** :

```typescript
export function getContext() {
  return {
    queryClient,
  }
}
```

- Retourne le contexte à injecter dans le router
- Appelée dans `router.tsx` pour configurer le router

3. **Provider React Query** :

```typescript
export function Provider({ children, queryClient }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

- Wrappe l'application pour fournir React Query
- Intégré dans le `Wrap` du router

#### Utilisation dans les Composants

**Hook `useQuery` :**

```typescript
import { useQuery } from '@tanstack/react-query'

const { data, isLoading, error } = useQuery({
  queryKey: ['pokemon', id],
  queryFn: () => fetchPokemon(id),
})
```

**Hook `useMutation` :**

```typescript
import { useMutation } from '@tanstack/react-query'

const mutation = useMutation({
  mutationFn: (newPokemon) => createPokemon(newPokemon),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['pokemon'] })
  },
})
```

#### Intégration SSR

- `@tanstack/react-router-ssr-query` synchronise les requêtes entre serveur et client
- Les données préchargées côté serveur sont hydratées côté client
- Évite les requêtes dupliquées

#### DevTools React Query

- Configuré dans `src/integrations/tanstack-query/devtools.tsx`
- Intégré dans les DevTools unifiés TanStack
- Accessible via le panneau DevTools en bas à droite

### Gestion des Collections (TanStack DB)

#### Création de Collections

**Fichier : `src/db-collections/index.ts`**

Les collections sont créées avec `createCollection` et `localOnlyCollectionOptions` :

```typescript
import {
  createCollection,
  localOnlyCollectionOptions,
} from '@tanstack/react-db'
import { z } from 'zod'

// 1. Définir le schéma Zod
const MessageSchema = z.object({
  id: z.number(),
  text: z.string(),
  user: z.string(),
})

// 2. Exporter le type TypeScript
export type Message = z.infer<typeof MessageSchema>

// 3. Créer la collection
export const messagesCollection = createCollection(
  localOnlyCollectionOptions({
    getKey: (message) => message.id, // Fonction pour obtenir la clé unique
    schema: MessageSchema, // Schéma de validation
  }),
)
```

**Caractéristiques :**

- `localOnlyCollectionOptions` : Collection stockée uniquement en mémoire (client-side)
- `getKey` : Fonction pour identifier chaque élément de manière unique
- `schema` : Validation Zod automatique des données

#### Utilisation des Collections

**Hook `useLiveQuery` :**

```typescript
import { useLiveQuery } from '@tanstack/react-db'
import { messagesCollection } from '@/db-collections'

// Requête réactive qui se met à jour automatiquement
const { data: messages } = useLiveQuery((q) =>
  q
    .from({ message: messagesCollection })
    .select(({ message }) => ({ ...message })),
)
```

**Opérations CRUD :**

```typescript
// Insert
messagesCollection.insert({ id: 1, text: 'Hello', user: 'Alice' })

// Update
messagesCollection.update({ id: 1 }, { text: 'Updated' })

// Delete
messagesCollection.delete({ id: 1 })

// Find
const message = messagesCollection.find({ id: 1 })
```

#### Intégration avec React Query

- `@tanstack/query-db-collection` permet d'utiliser les collections comme source de données pour React Query
- Les collections peuvent être utilisées dans les `queryFn` de React Query
- Permet de combiner données locales et distantes

#### Collections pour l'API Pokémon

**Fichier : `src/db-collections/pokeAPI-collections.tsx`**

- Actuellement vide, prêt pour les collections de Pokémon
- Devrait contenir des collections pour :
  - Pokémon (avec types, stats, etc.)
  - Abilities
  - Moves
  - Types
  - Encounters

**Structure suggérée :**

```typescript
const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  types: z.array(z.string()),
  stats: z.object({ ... }),
  // ...
})

export const pokemonCollection = createCollection(
  localOnlyCollectionOptions({
    getKey: (pokemon) => pokemon.id,
    schema: PokemonSchema,
  }),
)
```

### Flux de Données Global

```
┌─────────────────────────────────────────────────────────┐
│                    Application                           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐      ┌──────────────┐                │
│  │   Router     │──────│ QueryClient  │                │
│  │  (Context)   │      │  (Shared)    │                │
│  └──────────────┘      └──────────────┘                │
│         │                      │                        │
│         │                      │                        │
│         ▼                      ▼                        │
│  ┌──────────────┐      ┌──────────────┐                │
│  │   Routes     │      │ React Query  │                │
│  │  (File-based)│      │  (useQuery)  │                │
│  └──────────────┘      └──────────────┘                │
│         │                      │                        │
│         │                      │                        │
│         └──────────┬───────────┘                        │
│                    │                                     │
│                    ▼                                     │
│         ┌──────────────────┐                            │
│         │ TanStack DB      │                            │
│         │ (Collections)    │                            │
│         └──────────────────┘                            │
│                    │                                     │
│                    ▼                                     │
│         ┌──────────────────┐                            │
│         │   Components     │                            │
│         │  (UI Rendering)  │                            │
│         └──────────────────┘                            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Bonnes Pratiques

1. **QueryClient** :
   - Une seule instance partagée
   - Configurée au niveau du router
   - Accessible via le contexte des routes

2. **Collections** :
   - Définir les schémas Zod pour la validation
   - Utiliser `getKey` pour des clés uniques
   - Exporter les types TypeScript depuis les schémas

3. **Routes** :
   - Utiliser le file-based routing
   - Accéder au contexte via `Route.useRouteContext()`
   - Utiliser les loaders pour le préchargement de données

4. **Intégration** :
   - Combiner React Query pour les données distantes
   - Utiliser TanStack DB pour les données locales
   - Synchroniser via `@tanstack/query-db-collection` si nécessaire

## Configuration

### TypeScript

- Path alias `@/*` pointant vers `./src/*`
- Mode strict activé
- Target ES2022
- JSX React

### Vite

- Plugin TanStack Start pour le SSR
- Plugin Tailwind CSS
- Plugin React avec React Compiler
- Support des path aliases via `vite-tsconfig-paths`
- DevTools TanStack intégrés

### Tailwind CSS

- Version 4.1.17
- Configuration via plugin Vite
- Classes utilitaires pour le styling

## Scripts disponibles

```bash
pnpm dev          # Démarre le serveur de développement (port 3000)
pnpm build        # Build pour la production
pnpm serve        # Preview du build de production
pnpm test         # Lance les tests Vitest
pnpm lint         # Vérifie le code avec ESLint
pnpm format       # Formate le code avec Prettier
pnpm check        # Formate et lint en une commande
```

## Fonctionnalités principales

1. **Navigation :**
   - Header avec liens vers les sections principales
   - Barre de recherche (UI prête, logique à implémenter)
   - Routing SPA avec TanStack Router

2. **Affichage des Pokémon :**
   - Support des jeux principaux (9 générations)
   - Support des jeux de fans (Pokémon Vanguard)
   - Sprites organisés par catégorie (Front, Back, Icons, etc.)

3. **Architecture extensible :**
   - Structure modulaire pour ajouter de nouveaux jeux
   - Collections de données séparées par jeu
   - Composants réutilisables

## Points d'attention pour le développement

1. **Fichiers de démonstration :**
   - Les fichiers préfixés par `demo.` peuvent être supprimés
   - Ils servent d'exemples pour les fonctionnalités TanStack

2. **Collections DB :**
   - Actuellement une collection de messages (exemple)
   - `pokeAPI-collections.tsx` semble être en préparation

3. **Composants en développement :**
   - `Step1-IP.tsx` est un composant de test
   - La logique de recherche n'est pas encore implémentée

4. **Données Vanguard :**
   - Fichiers JSON/TXT présents mais pas encore intégrés dans l'UI
   - Sprites disponibles dans `public/assets/sprites/vanguard/`

## Conventions de code

- **TypeScript strict** : Tous les fichiers sont typés
- **Path aliases** : Utiliser `@/` pour les imports depuis `src/`
- **Composants** : PascalCase pour les noms de fichiers et composants
- **Routes** : File-based routing, noms de fichiers = chemins de routes
- **Styling** : Tailwind CSS avec classes utilitaires
- **Formatage** : Prettier + ESLint (TanStack config)

## Dépendances clés à connaître

- **@tanstack/react-router** : Routing et navigation
- **@tanstack/react-query** : Fetching et cache de données
- **@tanstack/react-db** : Base de données locale
- **@tanstack/react-form** : Gestion de formulaires
- **@tanstack/react-store** : State management
- **zod** : Validation de schémas
- **tailwindcss** : Styling
- **shadcn/ui** : Composants UI

## Prochaines étapes suggérées

1. Implémenter la logique de recherche dans le Header
2. Créer les composants d'affichage des Pokémon
3. Intégrer les données Vanguard dans l'UI
4. Développer les collections DB pour les Pokémon
5. Ajouter des filtres par génération/type
6. Implémenter les détails de chaque Pokémon
