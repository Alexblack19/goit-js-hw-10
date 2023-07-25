const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = nameCat =>
  fetch(`${BASE_URL}/v1/breeds`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(console.warn);

fetchBreeds();


import axios from "axios";

axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;