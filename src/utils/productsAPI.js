import tokenService from './tokenService';

const BASE_URL = '/api/products/';

function index() {
  return fetch(BASE_URL)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad credentials');
    })
    .then(products => products);
}

function addProduct(productId) {
  var options = getAuthRequestOptions('POST');
  options.body = JSON.stringify({productId});
  return fetch(BASE_URL + '/cart', options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error adding Product to Cart');
    })
    .then(cart => cart);
}

/*----- Helper Functions -----*/

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-type': 'application/json'
    })
  };
}

export default {
  index,
  addProduct
};