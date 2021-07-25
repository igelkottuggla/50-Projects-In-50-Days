const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

//my additional function to check if the img poster !== null
function checkImagePoster(src) {
  if (src) {
    return IMG_PATH + src;
  } else {
    let placeholder =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png';
    return placeholder;
  }
}

export default checkImagePoster;
