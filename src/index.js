//== Підключення бібліотеки Slim Select ==
import SlimSelect from 'slim-select';
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
    selectEl.innerHTML = markup;
    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(error => {
    console.log(error);
  });

selectEl.addEventListener('change', onBreedSelect);

function onBreedSelect(e) {
  const breedId = e.target.value;
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
  const catInfoHTML = `<img src="${url}" alt="${name}" width=100%>
      <h1>${name}</h1>
      <p>${description}</p>      
      <p><strong>Temperament:&#160;</strong>${temperament}</p>`;
  divEl.innerHTML = catInfoHTML;
}
