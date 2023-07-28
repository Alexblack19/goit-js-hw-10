const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/breeds?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

export const fetchCatByBreed = breedId =>
  fetch(
    `${BASE_URL}/images/search?api-key=${API_KEY}&breed_id=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
