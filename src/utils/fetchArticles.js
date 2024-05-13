// fetchArticles.js

export async function fetchArticles() {
    const apiUrl = 'http://localhost:1337/api/articles/';
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de los artículos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  