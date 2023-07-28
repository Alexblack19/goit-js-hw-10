const BASE_URL = 'https://api.thecatapi.com';
const END_POINT_BREEDS = 'v1/breeds';
const END_POINT_IMAGES = 'v1/images/search';

const API_KEY =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/${END_POINT_BREEDS}?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

export const fetchCatByBreed = breedId =>
  fetch(`${BASE_URL}/${END_POINT_IMAGES}?api-key=${API_KEY}&breed_id=${breedId} `).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
