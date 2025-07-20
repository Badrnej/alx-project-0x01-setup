import { Post, User } from '../interfaces/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
  // Récupérer tous les posts
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des posts');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur API getPosts:', error);
      throw error;
    }
  },

  // Récupérer un post par ID
  async getPostById(id: number): Promise<Post> {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération du post ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur API getPostById:', error);
      throw error;
    }
  },

  // Récupérer tous les utilisateurs
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur API getUsers:', error);
      throw error;
    }
  },

  // Récupérer un utilisateur par ID
  async getUserById(id: number): Promise<User> {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération de l'utilisateur ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur API getUserById:', error);
      throw error;
    }
  }
};
