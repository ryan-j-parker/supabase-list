// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { getAllCountries } from './fetch-utils.js';
import { renderCountryCard } from './render-utils.js';

const countryListContainer = document.getElementById('country-list-container');

async function loadData() {
  const central_american_countries = await getAllCountries();

  for (let country of central_american_countries) {
    const countryContainer = renderCountryCard(country);
    countryListContainer.append(countryContainer);
  }
}
loadData();