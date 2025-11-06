import { faker } from '@faker-js/faker';

export const createMockUser = (overrides: Record<string, unknown> = {}) => ({
  id: faker.string.uuid(),
  email: faker.internet.email().toLowerCase(),
  name: faker.person.fullName(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  ...overrides,
});

export const createMockUserInput = (overrides: Record<string, unknown> = {}) => ({
  email: faker.internet.email().toLowerCase(),
  password: 'SecurePassword123!',
  name: faker.person.fullName(),
  ...overrides,
});
