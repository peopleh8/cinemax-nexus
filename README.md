# Cinemax

Cinemax is a modern movie discovery platform built with a separate frontend and backend architecture.
The project focuses on a clean user experience, movie browsing, reviews, moderation tools, and scalable content management.

## Features

- Browse and search movies
- Filter movies by genre, country, release year, rating, and other criteria
- View movie details, posters, cast, and related content
- User authentication with access and refresh tokens
- Profile management
- Ratings and reviews
- Role-based access control
- Content moderation tools
- Responsive interface for desktop and mobile
- REST API for future mobile application support

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Redux Toolkit
- SCSS Modules
- next-intl

### Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT authentication
- Argon2 password hashing

## User Roles

- **User** — can browse content, manage their profile, and leave reviews.
- **Editor** — can manage movie-related content and moderate reviews.
- **Admin** — has full access to platform management features.

## Getting Started

### Requirements

- Node.js 20+
- PostgreSQL
- npm, pnpm, or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/cinemax.git
cd cinemax
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file based on `.env.example` and configure your database connection and JWT settings.

```bash
npx prisma migrate dev
npx prisma generate
npm run start:dev
```

The backend will run on:

```text
http://localhost:4000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:3000
```

## Environment Variables

Example backend environment variables:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/cinemax"

JWT_ACCESS_TOKEN_SECRET="your-access-token-secret"
JWT_REFRESH_TOKEN_SECRET="your-refresh-token-secret"

JWT_ACCESS_TOKEN_TTL="15m"
JWT_REFRESH_TOKEN_TTL="30d"

CLIENT_URL="http://localhost:3000"
```

## Development Principles

- Keep business logic inside backend services.
- Validate incoming data with DTOs and pipes.
- Protect private endpoints with guards.
- Use role-based authorization for editor and admin actions.
- Keep API responses predictable and consistent.
- Use server-side rendering where it improves performance and SEO.
- Keep frontend state focused on UI and client-side interaction.

## Roadmap

- [ ] Authentication and profile management
- [ ] Movie catalog and advanced filters
- [ ] Ratings and reviews
- [ ] Role-based moderation tools
- [ ] Search and recommendations
- [ ] Watchlist and favorites
- [ ] Internationalization
- [ ] Media uploads and poster management
- [ ] Public API documentation
- [ ] Mobile application support

## License

This project is currently private and intended for personal development.
