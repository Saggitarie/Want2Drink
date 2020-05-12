
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('drinking_location').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinking_location').insert([
        {longitude: 35.664550, latitude: 139.697713, drinking_place_name: "Shibuya Hub", location_set_time: "2020-05-13 19:10:25-07", time_expiration: false, user_location_id: 2},
        {longitude: 35.664550, latitude: 139.697713, drinking_place_name: "Shibuya Hub", location_set_time: "2020-05-13 18:10:25-07", time_expiration: false, user_location_id: 3},
        {longitude: 35.665542, latitude: 139.729499, drinking_place_name: "Agave", location_set_time: "2020-05-13 20:10:25-07", time_expiration: false, user_location_id: 8},
        {longitude: 35.665542, latitude: 139.729499, drinking_place_name: "Agave", location_set_time: "2020-05-13 18:30:25-07", time_expiration: false, user_location_id: 4},
        {longitude: 35.664693, latitude: 139.699204, drinking_place_name: "The SG Club", location_set_time: "2020-05-13 19:10:25-07", time_expiration: false, user_location_id: 1},
        {longitude: 35.665895, latitude: 139.713328, drinking_place_name: "Commune 2nd", location_set_time: "2020-05-13 20:10:25-07", time_expiration: false, user_location_id: 5},
        {longitude: 35.694297, latitude: 139.704652, drinking_place_name: "ALBATROSS G", location_set_time: "2020-05-13 21:10:25-07", time_expiration: false, user_location_id: 9},
        {longitude: 35.662921, latitude: 139.735196, drinking_place_name: "Two Dogs Taproom", location_set_time: "2020-05-13 18:10:25-07", time_expiration: false, user_location_id: 7},
        {longitude: 35.662921, latitude: 139.735196, drinking_place_name: "Two Dogs Taproom", location_set_time: "2020-05-13 16:10:25-07", time_expiration: false, user_location_id: 6},
      ]);
    });
};
