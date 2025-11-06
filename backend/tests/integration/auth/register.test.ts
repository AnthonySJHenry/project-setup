import request from 'supertest';
import { Express } from 'express';
import { createApp } from '@/app';
import { prisma } from '@/utils/db';

describe('POST /api/auth/register', () => {
  let app: Express;

  beforeAll(async () => {
    app = await createApp();
  });

  beforeEach(async () => {
    // Clean database before each test
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should register a new user successfully', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'SecurePassword123!',
      name: 'Test User',
    };

    const response = await request(app).post('/api/auth/register').send(userData).expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe(userData.email);
    expect(response.body.name).toBe(userData.name);
    expect(response.body).not.toHaveProperty('password');

    // Verify user in database
    const dbUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });
    expect(dbUser).toBeDefined();
    expect(dbUser?.password).not.toBe(userData.password);
  });

  it('should return 400 for invalid email', async () => {
    const userData = {
      email: 'invalid-email',
      password: 'SecurePassword123!',
      name: 'Test User',
    };

    const response = await request(app).post('/api/auth/register').send(userData).expect(400);

    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toContain('email');
  });

  it('should return 409 for duplicate email', async () => {
    const userData = {
      email: 'duplicate@example.com',
      password: 'SecurePassword123!',
      name: 'Test User',
    };

    // First registration
    await request(app).post('/api/auth/register').send(userData).expect(201);

    // Duplicate registration
    const response = await request(app).post('/api/auth/register').send(userData).expect(409);

    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toContain('already exists');
  });
});
