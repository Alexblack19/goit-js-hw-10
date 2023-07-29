//======== Підключення бібліотек ========
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
// ======================================

import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

loaderEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join();
    selectEl.innerHTML = markup;
    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(error => {
    console.log(error);
  });

function onBreedSelect(e) {
  const breedId = e.target.value;

  console.log(breedId);
  fetchCatByBreed(breedId)
    .then(data => {
      const { breeds, url } = data[0];
      const { name, description, temperament } = breeds[0];
      createMarkup(url, name, description, temperament);
    })
    .catch(error => {
      console.log(error);
    });
}

function createMarkup(url, name, description, temperament) {
  const catInfoHTML = `<div class=wrap>
                          <img class="img-cat" src="${url}" alt="${name}">
                       </div>                       
                       <div class=wrap>
                          <h1>${name}</h1>
                          <p>${description}</p>
                          <p><strong>Temperament:&#160;</strong>${temperament}</p>
                       </div>`;
  divEl.innerHTML = catInfoHTML;
}

selectEl.addEventListener('change', onBreedSelect);
