import axios from 'axios';
import {API_URL} from '../../../env.json';
export default axios.create({
  baseURL: API_URL,
  timeout: 8000,
});
