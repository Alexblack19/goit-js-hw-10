//======== Підключення бібліотек ========
import axios from 'axios';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
// ======================================

import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const refs = {
  selectEl: document.querySelector('.breed-select'),
  divEl: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
};

refs.loaderEl.textContent = '';
refs.loaderEl.classList.replace('loader', 'is-hidden');

fetchBreeds()
  .then(data => createMarkupSelect(data))
  .catch(error => {
    console.log(error);
  });

function onBreedSelect(e) {
  refs.loaderEl.classList.replace('is-hidden', 'loader');
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(data => {
      refs.loaderEl.classList.replace('loader', 'is-hidden');
      const { breeds, url } = data[0];
      const { name, description, temperament } = breeds[0];
      createMarkupCatInfo(url, name, description, temperament);
    })
    .catch(error => {
      console.log(error);
    });
}

function createMarkupSelect(data) {
  const markup = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join();
  refs.selectEl.innerHTML = markup;
  new SlimSelect({
    select: refs.selectEl,
  });
}

function createMarkupCatInfo(url, name, description, temperament) {
  const catInfoHTML = `<div class=tumb>
                          <img class="img-cat" src="${url}" alt="${name}">
                       </div>                       
                       <div class=wrap>
                          <h1>${name}</h1>
                          <p>${description}</p>
                          <p><strong>Temperament:&#160;</strong>${temperament}</p>
                       </div>`;
  refs.divEl.innerHTML = catInfoHTML;
}

refs.selectEl.addEventListener('change', onBreedSelect);
