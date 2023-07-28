import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select')

fetchBreeds()
  .then(renderCatCard)
  .catch(error => {
    console.log(error);
  });

function renderCatCard(cats) {
  console.log(cats);

  // розмітка HTML
}


