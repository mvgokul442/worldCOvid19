import Url from '../../utils/Url';
import { API2 } from '../../utils/Api';

function getWhoNews() {
  return API2.get(Url.who_news).then((res) => res.data);
}

const whoActions = {
  getWhoNews,
};

export default whoActions;
