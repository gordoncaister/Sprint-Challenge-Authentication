const bcryptjs = require("bcryptjs")

let password = bcryptjs.hashSync("gord", 4)
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:"gord",password:`${password}`}
      ]);
    });
};
