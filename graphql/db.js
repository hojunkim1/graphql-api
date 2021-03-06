import axios from "axios";

const LIST_MOVIES_URL = "https://yts.am/api/v2/list_movies.json";
const MOVIE_DETAILS_URL = "https://yts.am/api/v2/movie_details.json";

export const getMovies = async (limit = 50, rating = 7) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(`${LIST_MOVIES_URL}?limit=${limit}&minimum_rating=${rating}`);
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
