import bcrypt from 'bcrypt';
 
export const users = [];

export const seedUsers = async () => {
  if (users.length) return;
  users.push(
    {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('admin123', 10),
      role: 'admin',
    },
    {
      id: 2,
      username: 'user',
      email: 'user@example.com',
      password: await bcrypt.hash('user123', 10),
      role: 'user',
    }
  );
};
