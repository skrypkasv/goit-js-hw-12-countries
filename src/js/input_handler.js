import fetchCountries from './fetch_countries';
import { renderMarkup, clearMarkup } from './markup_render';
import throwError from './throw_error';

export default function onInputHandler(e) {
  e.preventDefault();
  const searchQuery = e.target.value.trim();

  if (searchQuery.length > 0) {
    fetchCountries(searchQuery)
      .then(renderMarkup)
      .catch(err => {
        throwError(err);
      });
  }

  if (searchQuery.length === 0) clearMarkup();
}
