import './sass/main.scss';


// Файлы js
import countryCard from './templates/country-card.hbs';
import countryInformation from './js/fetchCountries.js';
import { alert, notice, info, success, error, Stack } from '@pnotify/core';
import "./sass/main.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";



var debounce = require('lodash.debounce');
const countryArea = document.querySelector('.country_block');
const inputArea = document.querySelector('.js-input-area')


const fetchCountry = e => {
    console.log(e.target.value);
    countryInformation(e.target.value)
    .then(response => {
        return response.json();
    })
    .then(country => {
        if (country.length === 1) {
            console.log('country', country);
            let countryResult = countryCard(country);
            countryArea.innerHTML = countryResult;
        } else if (country.length >= 2 && country.length <= 10) {
            console.log('country 2-10', country);
            countryArea.innerHTML = country
            .map(({ name }) => `<li>${name}</li>`)
            .join('');
        } else if (country.length >= 10) {
            console.log('country >10', country);
            const myStack = new Stack({
                delay: 1000,
                dir1: 'down',
                dir2: 'left',
                mode: 'light',
                firstpos1: 25,
                firstpos: 25,
                spacing1: 36,
                spacing2: 36,
                push: 'top',
                context: document.body,
                positioned: true,
                maxStrategy: 'close'
            });
            const myAlert = alert({
                title: 'Oh no!',
                text: "Too many matches found. Please enter a more specific query",
                type: 'error',
                stack: myStack,
            });
        }
        return country;
    })
    .catch(error => {
        console.log(error);
    })
};



inputArea.addEventListener('input', debounce(fetchCountry, 500));
