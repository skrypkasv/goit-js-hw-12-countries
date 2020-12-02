const baseURL = 'https://restcountries.eu/rest/v2/';

export default function fetchCountries(searchQuery) {
  return fetch(`${baseURL}name/${searchQuery}`).then(response => {
    if (response.ok) return response.json();
    if (response.status === 404) throw new Error('Request was not found');
    throw new Error('Error fetching data');
  });
}
