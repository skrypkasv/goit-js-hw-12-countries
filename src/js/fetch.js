const baseURL = 'https://restcountries.eu/rest/v2/';

export function fetchData(name) {
  return fetch(`${baseURL}name/${name}`).then(response => {
    if (response.ok) return response.json();
    if (response.status === 404) throw new Error('Not found');
    throw new Error('Error fetching data');
  });
}
