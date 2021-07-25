const HIGH_RATING = 8;
const AVERAGE_RATING = 5;

function getClassByRate(vote) {
  if (vote >= HIGH_RATING) {
    return 'green';
  } else if (vote >= AVERAGE_RATING) {
    return 'orange';
  } else {
    return 'red';
  }
}

export default getClassByRate;
