import {showError, storeData} from '../../utils';
import API from './source';

const postLogin = (params, data) => {
  API.post(params, data)
    .then(async res => {
      await storeData('access_token', res.data.access_token);
    })
    .catch(err => {
      showError('Something went wrong with our server');
    });
};

export default postLogin;
