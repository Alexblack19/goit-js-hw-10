//== Підключення бібліотеки Slim Select ==
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
// =======================================
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join();
    selectEl.insertAdjacentHTML("beforeend", markup);
    new SlimSelect({
      select: '.breed-select'
    })
  })
  .catch(error => {
    console.log(error);
  });
