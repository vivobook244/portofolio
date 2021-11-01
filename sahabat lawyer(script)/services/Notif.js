import axios from 'axios';
import {API_FIREBASE} from '../../env.json';

export default axios.create({
  baseURL: API_FIREBASE,
});
