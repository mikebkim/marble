var Product = require('./models/Product');
require('dotenv').config();
require('./config/database');

Product.remove({}).then(() => {
    Product.create([
      {name: 'Original', price: 5, description: '', ingredients: ['']},
      {name: 'Pepper', price: 5, description: '', ingredients: ['']},
      {name: 'Sweet & Spicy', price: 5, description: '', ingredients: ['']},
      {name: 'Teryaki', price: 5, description: '', ingredients: ['']}
    ]).then(() => {
      process.exit();
    });
  })