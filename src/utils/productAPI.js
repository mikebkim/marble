import tokenService from './tokenService';
import ProductList from '../components/ProductList/ProductList';

const BASE_URL = '/api/product/';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then(ProductList => ProductList);
}

/*----- Helper Functions -----*/

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
  };
}

export default {
  index
};