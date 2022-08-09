// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { getACountry } from '../fetch-utils.js';
import { renderCountryDetail } from '../render-utils.js';

const countryDetailContainer = document.getElementById('country-detail-container');

const params = new URLSearchParams(window.location.search);

async function loadData() {
    const data = await getACountry(params.get('id'));
    const countryDiv = renderCountryDetail(data);
    countryDetailContainer.append(countryDiv);
}

loadData();