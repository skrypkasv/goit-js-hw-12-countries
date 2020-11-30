import fetchCountries from './fetchCountries';
import { renderMarkup, clearMarkup } from './render-markup';
import throwError from './throw-error';

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
