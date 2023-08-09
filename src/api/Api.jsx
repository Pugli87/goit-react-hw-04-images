// services/api.js
import axios from 'axios';

const API_KEY = '37119471-67d3015a83a24c7694e1d7310';
const IMAGES_PER_PAGE = 12;

export const fetchArticlesWithQuery = async searchQuery => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
    );
    console.log('Response from API:', response.data);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default fetchArticlesWithQuery;
