## STACK

```lua
Frontend: Next.js 14 (App Router), TypeScript 5.x, Tailwind CSS 3.x, shadcn/ui, React Hook Form + Zod, TanStack Query v5, Axios, Jest + RTL, Playwright

Backend API: Node.js 20 LTS, Express.js, TypeScript 5.x, Prisma ORM, JWT, bcrypt, Zod, Winston, express-rate-limit, Helmet, Jest + Supertest

Python Microservice: FastAPI, Python 3.11+, Pydantic, pytest

Database & Infrastructure: PostgreSQL 16, AWS RDS, Docker + Docker Compose, GitHub Actions, AWS Amplify, EC2/Lambda, Terraform

Architecture:
Next.js Frontend → Express API (main) → PostgreSQL
                      ↓
                 FastAPI Python Microservices (scraping, parsing, other ML services)
```

<br>
<br>
<br>
<br>
<br>

# Current Sprint

## Tickets

| #   | Task                             | Time | Type    |
| --- | -------------------------------- | ---- | ------- |
| T1  | Project repository structure     | 1h   | Setup   |
| T2  | Backend TypeScript configuration | 2h   | Setup   |
| T3  | Jest testing infrastructure      | 1h   | Setup   |
| T4  | Docker PostgreSQL                | 1h   | Setup   |
| T5  | Prisma ORM setup                 | 1h   | Setup   |
| T6  | Password hashing utility (TDD)   | 1h   | Feature |
| T7  | Registration endpoint (TDD)      | 2h   | Feature |
| T8  | Manual testing checkpoint        | 1h   | Testing |

**Total**: ~10 hours

---

## MILESTONES

```bash
gh api repos/AnthonySJHenry/current-sprint/milestones \
  -f title="Sprint 1" \
  -f description="Foundation with TDD - Week 1" \
  -f due_on="2025-11-04T23:59:59Z"
```

## ISSUES

### T1: Project Setup

```bash
gh issue create \
  --title "T1: Create Project Repository and Folder Structure" \
  --label "setup,infrastructure,sprint-1,P0" \
  --milestone "Sprint 1" \
  --body "## Description
Initialize Git repository and create monorepo folder structure.

## Time: 30 minutes

## Acceptance Criteria
- [x] GitHub repo created
- [x] Local folder structure matches spec
- [x] README.md exists
- [x] .gitignore configured
- [x] Initial commit pushed


```

### T2: Backend TypeScript

```bash
gh issue create \
  --title "T2: Initialize Backend with TypeScript" \
  --label "setup,backend,typescript,sprint-1,P0" \
  --milestone "Sprint 1" \
  --body "## Description
Set up Node.js backend with TypeScript, Express, and development tooling.

## Time: 45 minutes

## Dependencies
- Depends on: T1

## Acceptance Criteria
- [x] package.json with correct scripts
- [x] TypeScript configured
- [x] npm run dev starts server
- [x] Code changes auto-restart
- [x] npm run type-check passes


```

### T3: Testing Infrastructure

```bash
gh issue create \
  --title "T3: Setup Testing Infrastructure (Jest + Supertest)" \
  --label "setup,testing,tdd,sprint-1,P0" \
  --milestone "Sprint 1" \
  --body "## Description
Install and configure Jest for unit and integration testing.

## Time: 1 hour

## Dependencies
- Depends on: T2

## Acceptance Criteria
- [x] Jest configured for TypeScript
- [x] npm test runs successfully
- [ ] Sample test passes
- [ ] Supertest works with Express
- [ ] Coverage reporting works


```

### T4: Docker PostgreSQL

```bash
gh issue create \
  --title "T4: Setup Docker with PostgreSQL" \
  --label "setup,database,docker,sprint-1,P0" \
  --milestone "Sprint 1" \
  --body "## Description
Create Docker Compose configuration for local PostgreSQL.

## Time: 45 minutes

## Prerequisites
- Docker Desktop installed

## Acceptance Criteria
- [ ] docker-compose.yml exists
- [ ] docker compose up -d starts PostgreSQL
- [ ] Can connect on localhost:5432
- [ ] Data persists between restarts


```

### T5: Prisma ORM

```bash
gh issue create \
  --title "T5: Setup Prisma ORM and Create User Schema" \
  --label "setup,database,prisma,sprint-1,P0" \
  --milestone "Sprint 1" \
  --body "## Description
Install Prisma ORM and create User/Job schema with migrations.

## Time: 1 hour

## Dependencies
- Depends on: T2, T4

## Acceptance Criteria
- [ ] Prisma installed
- [ ] schema.prisma contains User model
- [ ] Migration created and applied
- [ ] Can query users with Prisma Client
- [ ] TypeScript types auto-generated


```

### T6: Password Hashing (TDD)

```bash
gh issue create \
  --title "T6: Implement Password Hashing Utility (TDD)" \
  --label "backend,auth,tdd,security,sprint-1,P1" \
  --milestone "Sprint 1" \
  --body "## Description
Create password hashing utilities using bcrypt. **TDD approach**: tests first.

## Time: 45 minutes

## TDD Workflow
🔴 RED: Write failing tests
🟢 GREEN: Make tests pass
🔵 REFACTOR: Clean up code

## Dependencies
- Depends on: T3, T5

## Acceptance Criteria
- [ ] Tests written BEFORE implementation
- [ ] hashPassword() hashes passwords
- [ ] comparePassword() verifies passwords
- [ ] Hash never equals plain password
- [ ] >90% test coverage


```

### T7: Registration Endpoint (TDD)

```bash
gh issue create \
  --title "T7: Create Auth Registration Endpoint (TDD)" \
  --label "backend,auth,api,tdd,sprint-1,P1" \
  --milestone "Sprint 1" \
  --body "## Description
Build POST /api/auth/register endpoint with validation. **TDD approach**: integration tests first.

## Time: 2 hours

## TDD Workflow
🔴 RED: Write integration tests
🟢 GREEN: Implement route
🔵 REFACTOR: Clean up

## Dependencies
- Depends on: T6

## Acceptance Criteria
- [ ] POST /api/auth/register exists
- [ ] Tests written BEFORE implementation
- [ ] Validates email and password
- [ ] Returns 400 for invalid input
- [ ] Returns 409 for duplicate email
- [ ] Returns 201 with user (no password)
- [ ] Password hashed in database


```

### T8: Manual Testing

```bash
gh issue create \
  --title "T8: Manual Testing and Week 1 Checkpoint" \
  --label "testing,documentation,sprint-1,P1" \
  --milestone "Sprint 1" \
  --body "## Description
Manually test all Sprint 1 functionality and document progress.

## Time: 30 minutes

## Dependencies
- Depends on: T1-T7

## Acceptance Criteria
- [ ] All tests pass (npm test)
- [ ] Server starts without errors
- [ ] Can register user via curl
- [ ] Database has hashed passwords
- [ ] SPRINT-1-COMPLETE.md created

```
