<div align="center">

# CineMatch

### A modern movie discovery experience powered by TMDB

Explore popular releases, search the catalog, apply advanced filters, and keep a personal collection in one responsive application.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TMDB](https://img.shields.io/badge/Data-TMDB-01B4E4)](https://www.themoviedb.org/)

[Live demo](https://tmbd-mu.vercel.app) · [Roadmap](#roadmap) · [Getting started](#getting-started)

</div>

## About

CineMatch is a responsive movie discovery application built with React, TypeScript, and the TMDB API. It combines a browsable catalog, search, filtering, detailed movie pages, and locally persisted favorites behind a feature-oriented frontend architecture.

The current version is a frontend demo. The roadmap evolves it into a full-stack, personalized discovery platform with real authentication, synchronized user data, legal watch-provider links, and an AI movie concierge grounded in live catalog data.

## Current features

- Popular, top-rated, upcoming, and now-playing movie collections
- Movie search with dedicated result pages
- Discovery filters by genre, rating, and sort order
- Paginated catalog browsing
- Movie details with overview, runtime, budget, genres, and rating
- Cast and similar-movie sections
- Locally persisted favorites
- Demo registration and login flow
- Protected favorites route
- Light and dark themes
- Skeletons, global loading feedback, and error notifications
- Responsive desktop and mobile navigation

> [!NOTE]
> Authentication and user data currently use browser storage and are intended for demonstration only. They are not production authentication.

## Architecture

```text
Browser
  ├── React Router        → application navigation
  ├── Redux Toolkit       → auth, theme, and favorites state
  ├── RTK Query           → requests, caching, and loading state
  ├── localStorage        → demo session, favorites, and theme
  └── TMDB API            → movies, genres, credits, and recommendations
```

The codebase separates application setup, shared UI, reusable utilities, and domain features:

```text
src/
├── app/                  # App shell, API base query, and Redux store
├── common/               # Shared components, hooks, routing, and utilities
├── config/               # Runtime API configuration
└── features/
    ├── auth/             # Demo login and registration
    └── movies/           # Movie API and discovery screens
```

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19, CSS Modules |
| Language | TypeScript 5 |
| Build tooling | Vite 7, SWC |
| State management | Redux Toolkit, React Redux |
| Server state | RTK Query |
| Routing | React Router 7 |
| Notifications | React Toastify |
| Data source | TMDB API |
| Deployment | Vercel |

## Getting started

### Prerequisites

- Node.js 20 or newer
- pnpm
- A [TMDB API Read Access Token](https://developer.themoviedb.org/docs/authentication-application)

### Installation

```bash
git clone https://github.com/Ilja-Prihach/cinematch-movie-app.git
cd cinematch-movie-app
pnpm install
```

Create an `.env.local` file in the project root:

```dotenv
VITE_BASE_URL=https://api.themoviedb.org/3/
VITE_ACCESS_TOKEN=your_tmdb_read_access_token
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

> [!WARNING]
> Variables prefixed with `VITE_` are included in the browser bundle. The current direct TMDB integration is suitable for a demo; a planned server-side proxy will keep credentials outside the client application.

## Available scripts

```bash
pnpm dev       # Start the Vite development server
pnpm build     # Type-check and create a production build
pnpm lint      # Run ESLint
pnpm preview   # Preview the production build locally
```

## Roadmap

### Foundation

- [ ] Route TMDB requests through a server-side API proxy
- [ ] Replace demo authentication with Supabase Auth
- [ ] Store profiles, favorites, watchlists, ratings, and reviews in Postgres
- [ ] Finish profile and settings screens
- [ ] Add unit, integration, and end-to-end tests
- [ ] Resolve the remaining strict TypeScript and ESLint issues

### Richer discovery

- [ ] Add TV shows and people search
- [ ] Embed official trailers
- [ ] Show regional streaming, rental, and purchase availability
- [ ] Add watched, want-to-watch, and custom lists
- [ ] Support shareable collections and public profiles
- [ ] Improve accessibility, metadata, and social previews

### AI movie concierge

- [ ] Accept natural-language requests such as “a tense mystery under two hours, without horror”
- [ ] Convert user intent into structured TMDB filters with OpenAI tool calling
- [ ] Rank real catalog results against the user's taste profile
- [ ] Explain every recommendation using retrieved movie metadata
- [ ] Support conversational refinements such as “newer”, “lighter”, or “for the whole family”
- [ ] Remember explicit preferences without inventing movie facts

### Product direction

The goal is not to host copyrighted movies. CineMatch will help users discover titles, watch official trailers, and follow legal links to streaming providers. Public-domain or openly licensed video can be considered separately when the source license explicitly permits it.

## Data and attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

Movie metadata and images are provided by [The Movie Database](https://www.themoviedb.org/). Future watch-provider data will include the attribution required by its respective provider.

## Author

Built by [Ilja Prihach](https://github.com/Ilja-Prihach).

[LinkedIn](https://www.linkedin.com/in/ilya-prihach/) · [Telegram](https://t.me/Ilja_prihach)

