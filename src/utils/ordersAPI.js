import tokenService from './tokenService';

const BASE_URL = '/api/orders/';

function getCart() {
    return fetch(BASE_URL + 'cart', getAuthRequestOptions('GET'))
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Bad credentials');
        })
        .then(orders => orders);
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
    getCart
};