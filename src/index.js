//======== Підключення бібліотек ========
import axios from "axios";
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

refs.loaderEl.classList.add('is-hidden');
refs.errorEl.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join();
    refs.selectEl.innerHTML = markup;
    new SlimSelect({
      select: refs.selectEl,
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



console.log('hghgogjergreg');
