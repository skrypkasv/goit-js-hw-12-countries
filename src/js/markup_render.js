import countryCardTpl from '../templates/country_card.hbs';
import listOfContriesTpl from '../templates/country_list.hbs';
import throwError from './throw_error';

const cardContainer = document.querySelector('.js-card-container');
const err = 'Too many matches found. Please specify your request!';

export function renderMarkup(data) {
  if (data.length > 10) return throwError(err);
  if (data.length === 1) renderCountryCard(data);
  if (data.length > 1) renderListOfCountries(data);
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  cardContainer.innerHTML = markup;
}

function renderListOfCountries(countries) {
  const markup = listOfContriesTpl(countries);
  cardContainer.innerHTML = markup;
}

export function clearMarkup() {
  cardContainer.innerHTML = '';
}
