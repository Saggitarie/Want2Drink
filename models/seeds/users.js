
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Aizhan", last_name: 'Imankulova', email: "aizhan@gmail.com", created_at: "2020-05-13"},
        {first_name: "Riku", last_name: 'Kawano', email: "riku@gmail.com", created_at: "2020-05-13"},
        {first_name: "Carlos", last_name: 'Salazor', email: "carlos@gmail.com", created_at: "2020-05-13"},
        {first_name: "Jeff", last_name: 'Bentley', email: "jeff@gmail.com", created_at: "2020-05-13"},
        {first_name: "Chip", last_name: 'Crawford', email: "chip@gmail.com", created_at: "2020-05-13"},
        {first_name: "Yuya", last_name: 'Harada', email: "yuya@gmail.com", created_at: "2020-05-13"},
        {first_name: "Garret", last_name: 'Chun', email: "garret@gmail.com", created_at: "2020-05-13"},
        {first_name: "Tam", last_name: 'Nguyen', email: "tam@gmail.com", created_at: "2020-05-13"},
        {first_name: "Yurika", last_name: 'Namba', email: "yurika@gmail.com", created_at: "2020-05-13"},
      ]);
    });
};
