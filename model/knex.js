const knex = require('./conection.js');

var insertData=(data)=>{
    return knex('login').insert(data)
};

var insertProduct = (addProducts)=>{
    return knex('products_list').insert(addProducts)
}

module.exports = {insertData,insertProduct}