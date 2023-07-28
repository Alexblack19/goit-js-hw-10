const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/v1/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {   
      console.log(response);   
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });

export const fetchCatByBreed = breedId =>
  fetch(
    `${BASE_URL}/v1/images/search?api_key=${API_KEY}&breed_id=${breedId}`
  ).then(response => {    
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });


  console.log('jhgh;s');

