import { User } from '../models/user';

const users: User[] = [
  { id: '1', username: 'user1', email: 'user1@example.com', password: 'password123' },
  { id: '2', username: 'user2', email: 'user2@example.com', password: 'password123' },
];

export const getUsers = (): User[] => users;

export const getUser = (id: string): User | undefined => users.find(user => user.id === id);

export const addUser = (user: Omit<User, 'id'>): User => {
  const newUser: User = { id: (users.length + 1).toString(), ...user };
  users.push(newUser);
  return newUser;
};

export const authenticate = (username: string, password: string): User | null => {
  const user = users.find(user => user.username === username && user.password === password);
  return user || null;
};
