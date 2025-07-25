const API_KEY = "395ec959d3f2c51f1e4da58650167dd6";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetches a list of popular movies from the API.
 
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

// Searches for movies based on the provided query string.

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results;
};