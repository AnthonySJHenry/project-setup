import { Express } from 'express';
import request from 'supertest';
import { faker } from '@faker-js/faker';

export interface TestUser {
  id: string;
  email: string;
  password: string;
  name: string;
  token?: string;
}

export const generateTestUser = (): Omit<TestUser, 'id'> => ({
  email: faker.internet.email().toLowerCase(),
  password: 'TestPassword123!',
  name: faker.person.fullName()
});

export const registerTestUser = async (
  app: Express,
  userData = generateTestUser()
): Promise<TestUser> => {
  const response = await request(app)
    .post('/api/auth/register')
    .send(userData);

  return {
    ...response.body,
    password: userData.password
  };
};

export const loginTestUser = async (
  app: Express,
  email: string,
  password: string
): Promise<string> => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email, password });

  return response.body.token;
};

export const createAuthenticatedAgent = (
  app: Express,
  token: string
) => {
  return request.agent(app)
    .set('Authorization', `Bearer ${token}`);
};
