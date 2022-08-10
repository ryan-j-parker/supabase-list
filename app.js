import { getAllCountries } from './fetch-utils.js';
import { renderCountryCard } from './render-utils.js';

const countryListContainer = document.getElementById('country-list-container');

async function loadAllCountries() {
  const central_american_countries = await getAllCountries();

  for (let country of central_american_countries) {
    const countryContainer = renderCountryCard(country);
    countryContainer.classList.add('country-container');
    countryListContainer.append(countryContainer);
  }
}
loadAllCountries();

function changeClass() {
  const countryEl = renderCountryDetail(country);
  nameEl.textContent = country.name;
  for (let country of central_american_countries) {

    countryCard.addEventListener('click', () => {
      if (nameEl === country.name) {
        detailContainerEl.classList.remove('country-detail');
        detailContainerEl.classList.add(`${country.name}-class`);
        console.log('it works');
        debugger;
      }
    })
  }
}
changeClass();