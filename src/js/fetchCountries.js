export default class CountryInformation {
    constructor() { };
    countryInformation() {
        
     };
};

import countryCard from '../templates/country-card.hbs';

const url = 'https://restcountries.com/v2/name/peru';
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country);
        const countryResult = countryCard(country);
        console.log(countryResult);
    })
    .catch(error => {
        console.log(error)
    })