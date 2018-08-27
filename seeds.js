var Product = require('./models/product');
require('dotenv').config();
require('./config/database');

Product.remove({}).then(() => {
    Product.create([
        { name: 'Original', price: 5, description: 'The original Marble flavor!', ingredients: ['100% Grass-fed Beef', 'Himalayan Pink Salt'] },
        { name: 'Pepper', price: 5, description: 'Need a little spice? Pepper is always nice!', ingredients: ['100% Grass-fed Beef', 'Malabar', 'Szechuan', 'Talamanca Del Caribe'] },
        { name: 'Sweet & Spicy', price: 5, description: 'Caresses your taste buds then kicks your mouth!', ingredients: ['100% Grass-fed Beef', 'Organic Brown Sugar', 'Himalayan Pink Salt', 'India Red Chile', 'Ají Amarillo', 'Garlic'] },
        { name: 'Teryaki', price: 5, description: 'A classic Asian persuasion!', ingredients: ['100% Grass-fed Beef', 'Himalayan Pink Salt', 'Organic Brown Sugar', 'Soy Sauce', 'Manuka Honey', 'Garlic', 'Ginger Root'] }
    ]).then(() => {
        process.exit();
    });
})