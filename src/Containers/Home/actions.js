import { API } from '../../utils/Api';
import Url from '../../utils/Url';

export async function getConInfo(countryName) {
  try {
    const result = await API.get(
      `${Url.getbycountry + countryName}?lastdays=30`,
    );
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
}

function getCovidHistory() {
  return API.get(Url.summary).then((res) => res.data);
}

function getAllCountryNames() {
  return API.get(Url.allCountries).then((res) => res.data);
}

const homeActions = {
  getCovidHistory,
  getAllCountryNames,
};

export default homeActions;
