import { getACountry } from '../fetch-utils.js';
import { renderCountryDetail } from '../render-utils.js';

const countryDetailContainer = document.getElementById('country-detail-container');

const params = new URLSearchParams(window.location.search);

async function loadCountryData() {
    const data = await getACountry(params.get('id'));
    const countryDiv = renderCountryDetail(data);
    countryDetailContainer.append(countryDiv);
}

loadCountryData();