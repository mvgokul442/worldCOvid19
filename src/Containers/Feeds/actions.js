import { API3 } from '../../utils/Api';
import Url from '../../utils/Url';

function getFeeds() {
  return API3.get(Url.news).then((res) => res.data);
}

const feedActions = {
  getFeeds,
};

export default feedActions;
