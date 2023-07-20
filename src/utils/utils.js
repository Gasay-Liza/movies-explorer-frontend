export function checkPath(arr, path) {
  return arr.includes(path);
}
export function getConvertedTime(time) {
  if (time < 60) {
    return `${time}м`;
  } else if (time % 60 === 0) {
    return `${time / 60}ч`;
  } else {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }
}

export function getLikeStatus(savedMovies, movie) {
  return savedMovies.find((savedMovie) => {
    return savedMovie.movieId === (movie.id || movie.movieId);
  });
}
