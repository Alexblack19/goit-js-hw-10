import SlimSelect from 'slim-select'
import axios from "axios";
import {fetchBreeds} from "./js/cat-api.js"

new SlimSelect({
    select: '.breed-select'
  })
// axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;
  
fetchBreeds()
  .then(renderCatCard)
  .catch(error => {
    console.log(error);
  });

function renderCatCard(cats) {
    console.log(cats);
  }
  