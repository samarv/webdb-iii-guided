const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  // clean all table and reset primary key
  return cleaner.clean(knex);
};
