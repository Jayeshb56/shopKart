const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');


const products = require('../data/product.json');

//setting dotenv file

dotenv.config({path: 'backend/config/config.env'})

connectDatabase();

const seedProducts = async() => {
    try {
        await Product.deleteMany();
        console.log('all products are deleted');

        await Product.insertMany(products);
        console.log('All product are Added')

        process.exit();

    }catch(error){ 
        console.log(error.message);
        process.exit();
    }
}

seedProducts()