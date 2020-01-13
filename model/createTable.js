var knex = require("./conection.js");

// For login table....
knex.schema.createTable('login', (table) => {
    table.increments('id')
    table.string('email')
    table.string('password') 
   })
  .then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
  


// For products table....
knex.schema.createTable('products_list', (table) => {
    table.increments('id')
    table.string('image')
    table.string('name')
    table.string('categories')
    table.integer('price') 
  })
  .then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
  