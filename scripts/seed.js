const mongoose = require("mongoose");
const db = require("../models/user");

// This file empties the collection and inserts the things below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/users"
);

const Users = [
  {
    username: "sallySellsSeashells",
    email: "sallyheartsharry@gmail.com",
    password: "sallyandharry5ever",
    firstname: "Sally",
    lastname: "Seashore",
    age: 25,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 300,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
  {
    username: "LuisLion",
    email: "rawrluislion@aim.com",
    password: "kaitlynismybeastfriend",
    firstname: "Luis",
    lastname: "Martinez",
    age: 98,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 3,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
  {
    username: "zodiaczero",
    email: "scorpioass@yahoo.com",
    password: "iwishiwasanaquairus",
    firstname: "Hairy",
    lastname: "Podder",
    age: 15,
    phoneNum: 5555555555,
    characters: [
      "5e56b4b076329c4afc0b072f", "5e56b4b076329c4afc0b0730", "5e56b4b076329c4afc0b0733"
    ],
    highscore: 600,
    terms: true,
    notifications: false,
    activeStatus: true,
    blocked: false
  },
]

db
  .remove({})
  .then(() => db.collection.insertMany(Users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });