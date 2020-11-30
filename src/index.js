import './styles.css';
const debounce = require('lodash.debounce');
import onInputHandler from './js/input-handler';

const input = document.querySelector('.js-search');

input.addEventListener('input', debounce(onInputHandler, 500));
