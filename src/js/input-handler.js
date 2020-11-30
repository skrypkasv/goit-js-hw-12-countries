import { fetchData } from './fetch';
import { renderMarkup, clearMarkup } from './render-markup';
import { throwError } from './throw-error';

export function onInputHandler(e) {
  e.preventDefault();

  const searchQuery = e.target.value.trim();

  if (searchQuery.length > 0) {
    fetchData(searchQuery)
      .then(renderMarkup)
      .catch(err => {
        throwError(err);
      });
  }

  if (searchQuery.length === 0) clearMarkup();
}
