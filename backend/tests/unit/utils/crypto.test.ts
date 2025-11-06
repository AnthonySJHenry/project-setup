import { hashPassword, comparePassword } from '@/utils/crypto';

describe('Crypto Utils', () => {
  describe('hashPassword', () => {
    it('should hash a password successfully', async () => {
      const plainPassword = 'MySecurePassword123!';
      const hashedPassword = await hashPassword(plainPassword);

      expect(hashedPassword).toBeDefined();
      expect(hashedPassword).not.toBe(plainPassword);
      expect(hashedPassword.length).toBeGreaterThan(50);
      expect(hashedPassword).toStartWith('$2b$');
    });

    it('should generate different hashes for the same password', async () => {
      const plainPassword = 'TestPassword456!';
      const hash1 = await hashPassword(plainPassword);
      const hash2 = await hashPassword(plainPassword);

      expect(hash1).not.toBe(hash2);
    });

    it('should throw error for empty password', async () => {
      await expect(hashPassword('')).rejects.toThrow('Password cannot be empty');
    });
  });

  describe('comparePassword', () => {
    it('should return true for matching password', async () => {
      const plainPassword = 'CorrectPassword789!';
      const hashedPassword = await hashPassword(plainPassword);

      const isMatch = await comparePassword(plainPassword, hashedPassword);
      expect(isMatch).toBe(true);
    });

    it('should return false for non-matching password', async () => {
      const plainPassword = 'CorrectPassword789!';
      const wrongPassword = 'WrongPassword123!';
      const hashedPassword = await hashPassword(plainPassword);

      const isMatch = await comparePassword(wrongPassword, hashedPassword);
      expect(isMatch).toBe(false);
    });
  });
});
