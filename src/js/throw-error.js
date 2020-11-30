import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

export function throwError(message) {
  error({
    text: message,
    type: 'info',
    delay: 1000,
  });
}
