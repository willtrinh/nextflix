export async function getMoviesAndShows() {
  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
    nowPlayingMoviesRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [
    popularMovies,
    popularShows,
    topRatedMovies,
    topRatedShows,
    nowPlayingMovies,
  ] = await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    topRatedMoviesRes.json(),
    topRatedShowsRes.json(),
    nowPlayingMoviesRes.json(),
  ]);

  return [
    popularMovies,
    popularShows,
    topRatedMovies,
    topRatedShows,
    nowPlayingMovies,
  ];
}

export async function getMovieDetails(movieId) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,images`
  );

  const movieData = await request.json();
  return movieData;
}

export async function getShowDetails(showId) {
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,images`
  );

  const showData = await request.json();
  return showData;
}

// search multiple models in a single request (movies, tv, people)
export async function multiSearch(query) {
  const request = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  const results = await request.json();
  return results;
}

export async function getMovies(page = 1) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  const results = await request.json();
  return results;
}

export async function getShows() {
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const results = await request.json();
  return results;
}

export async function loadMore(page, type) {
  const mediaType = type.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  const results = await request.json();
  return results;
}
