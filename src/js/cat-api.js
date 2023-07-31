import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = () =>
  axios.get(`${BASE_URL}/breeds`).then(response => {    
    return response.data;
  });

export const fetchCatByBreed = breedId =>
  axios.get(`${BASE_URL}/images/search?breed_id=${breedId}`).then(response => {
    return response.data;
  });

//========== Варіант без Axios ==========//
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

// export const fetchBreeds = () =>
//   fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });

// export const fetchCatByBreed = breedId =>
//   fetch(
//     `${BASE_URL}/images/search?api_key=${API_KEY}&breed_id=${breedId}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
