import axios from 'axios';
// axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;

const BASE_URL = 'https://api.thecatapi.com';
const API_KEY =
  'live_9WSo2Jn9CKnphyJArmkanU7amzSO2MnioxrGT7XMimNpxzxlc0kjKpWz3hL08Pnd';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/v1/images?api_key=${API_KEY}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  });
