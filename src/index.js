// import SlimSelect from 'slim-select'

import { fetchBreeds } from './js/cat-api.js';

// new SlimSelect({
//     select: '.breed-select'
//   })

const selectEl = document.querySelector('.breed-select')


fetchBreeds()
  .then(renderCatCard)
  .catch(error => {
    console.log(error);
  });

function renderCatCard(cats) {
  console.log(cats);
}


