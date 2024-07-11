import { User, User2 } from '../models/user';

const users: User[] = [
  { id: '1', username: 'user1', email: 'user1@example.com', password: 'password123' },
  { id: '2', username: 'user2', email: 'user2@example.com', password: 'password123' },
];

export const GetUsers = (): User[] => users;

export const getUser = (id: string): User | undefined => users.find(user => user.id === id);

export const addUser = (user: Omit<User, 'id'>): User => {
  const n: User = { id: (users.length + 1).toString(), ...user };
  users.push(n);
  return n;
};

// FIXME
export const authenticate = (username: string, password: string): User | null => {
  const user: User2 = users.find(user => user.username === username && user.password === password) as any;
  return user || null;
};
