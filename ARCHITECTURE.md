# ARCHITECTURE

```lua
job-app-tracker-test/                    ← ROOT
│
├── package.json                         ← Root workspace config (NO app code)
├── docker-compose.yml                   ← PostgreSQL container
├── playwright.config.ts                 ← E2E test config
├── .gitignore
├── README.md
│
├── backend/                             ← EXPRESS API (Node.js)
│   ├── package.json                     ← Backend dependencies
│   ├── tsconfig.json                    ← Backend TypeScript config
│   ├── tsconfig.test.json               ← Test TypeScript config
│   ├── vitest.config.ts                 ← Vitest test runner config
│   ├── .env                             ← Backend environment variables
│   ├── .env.test                        ← Test environment variables
│   │
│   ├── src/                             ← BACKEND SOURCE CODE
│   │   ├── app.ts                       ← EXPRESS APP (backend)
│   │   ├── index.ts                     ← Server entry point (imports app.ts)
│   │   ├── auth/
│   │   │   ├── controller.ts            ← Auth route handlers
│   │   │   ├── service.ts               ← Auth business logic
│   │   │   └── middleware.ts            ← JWT middleware
│   │   ├── config/
│   │   │   ├── database.ts              ← Prisma client config
│   │   │   └── env.ts                   ← Environment validation
│   │   ├── utils/
│   │   │   ├── crypto.ts                ← Password hashing (bcrypt)
│   │   │   ├── logger.ts                ← Winston logger
│   │   │   └── db.ts                    ← Database utilities
│   │   ├── routes/
│   │   │   ├── auth.routes.ts           ← Auth endpoints
│   │   │   └── index.ts                 ← Route aggregator
│   │   ├── middleware/
│   │   │   ├── error-handler.ts         ← Global error handling
│   │   │   └── validation.ts            ← Zod validation
│   │   └── types/
│   │       └── express.d.ts             ← Express type extensions
│   │
│   ├── tests/                           ← BACKEND TESTS
│   │   ├── setup.ts                     ← Test setup w/ Vitest
│   │   ├── unit/                        ← 60% of tests
│   │   │   ├── auth/
│   │   │   │   └── service.test.ts
│   │   │   └── utils/
│   │   │       └── crypto.test.ts       ← Password hashing tests
│   │   ├── integration/                 ← 30% of tests
│   │   │   └── auth/
│   │   │       └── register.test.ts     ← API endpoint tests
│   │   ├── fixtures/                    ← Test data
│   │   ├── helpers/                     ← Test utilities
│   │   └── mocks/
│   │       └── user.mock.ts             ← Mock data generators
│   │
│   └── prisma/
│       ├── schema.prisma                ← Database schema
│       └── migrations/                  ← Database migrations
│
├── frontend/                            ← NEXT.JS APP
│   ├── package.json                     ← Frontend dependencies
│   ├── tsconfig.json                    ← Frontend TypeScript config
│   ├── next.config.ts                   ← Next.js config
│   ├── tailwind.config.ts               ← Tailwind CSS config
│   ├── postcss.config.mjs               ← PostCSS config
│   ├── .env.local                       ← Frontend environment variables
│   │
│   ├── src/
│   │   ├── app/                         ← NEXT.JS APP ROUTER
│   │   │   ├── layout.tsx               ← Root layout
│   │   │   ├── page.tsx                 ← Home page
│   │   │   ├── globals.css              ← Global styles
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx         ← /auth/login route
│   │   │   │   └── register/
│   │   │   │       └── page.tsx         ← /auth/register route
│   │   │   └── dashboard/
│   │   │       └── page.tsx             ← /dashboard route
│   │   │
│   │   ├── components/                  ← React components
│   │   │   ├── ui/                      ← shadcn/ui components
│   │   │   ├── forms/
│   │   │   └── layouts/
│   │   │
│   │   ├── hooks/                       ← Custom React hooks
│   │   │   └── useAuth.ts
│   │   │
│   │   ├── lib/                         ← Frontend utilities
│   │   │   ├── api.ts                   ← Axios/fetch wrappers
│   │   │   └── utils.ts
│   │   │
│   │   └── styles/                      ← Additional styles
│   │
│   └── __tests__/                       ← Frontend component tests
│       └── components/
│           └── LoginForm.test.tsx
│
├── shared/                              ← SHARED CODE (both backend & frontend)
│   ├── types/
│   │   ├── user.types.ts                ← User type definitions
│   │   ├── job.types.ts                 ← Job type definitions
│   │   └── api.types.ts                 ← API request/response types
│   ├── constants/
│   │   └── validation.ts                ← Shared validation rules
│   └── utils/
│       └── date.ts                      ← Shared date utilities
│
└── tests/                               ← ROOT-LEVEL E2E TESTS (10% of tests)
    └── e2e/
        ├── auth.spec.ts                 ← Login/register E2E
        └── jobs.spec.ts                 ← Job CRUD E2E
```
