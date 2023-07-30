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

const { selectEl, divEl, loaderEl, errorEl } = refs;

// loaderEl.textContent = '';
// divEl.classList.add('is-hidden');
// loaderEl.classList.replace('loader', 'is-hidden');
// errorEl.hidden = true;

fetchBreeds()
  .then(data => createMarkupSelect(data))
  .catch(error => {
    console.log(error);
  });

function onBreedSelect(e) {
  // loaderEl.classList.replace('is-hidden', 'loader');
  // divEl.classList.add('is-hidden');
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(data => {
      // loaderEl.classList.replace('loader', 'is-hidden');
      const { breeds, url } = data[0];
      const { name, description, temperament } = breeds[0];
      createMarkupCatInfo(url, name, description, temperament);
    })
    .catch(onFetchError);
}

function createMarkupSelect(data) {
  // selectEl.classList.replace('is-hidden', 'breed-select');
  const markup = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join();
  selectEl.innerHTML = markup;  
  new SlimSelect({
    select: selectEl,
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
  divEl.innerHTML = catInfoHTML;
  // divEl.classList.remove('is-hidden');
}

function onFetchError() {
  // loaderEl.classList.replace('loader', 'is-hidden');
  // divEl.classList.add('is-hidden');
  Notiflix.Notify.failure(`${errorEl.textContent}`, {
    position: 'center-center',
  });
}

selectEl.addEventListener('change', onBreedSelect);
