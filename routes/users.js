var express = require('express');
var router = express.Router();

// Need to require the necessary DB items
const Schema = require("../db/schema.js");
const UserModel = Schema.UserModel;

// INDEX ROUTE

router.get('/', (request, response) => {
    // This will list all the users in the database
    UserModel.find({})
      .then((users) => {
        response.render('user/index', {
            users: users
      })
    })
      .catch((error) => {
        console.log(error)
      })
});

// NEW ROUTE
// This route will take you to a page with a new user form
router.get('/new', (request, response) => {
  response.render('user/new')
});

// CREATE ROUTE

// EDIT ROUTE

// UPDATE ROUTE

// SHOW ROUTE

// DELETE ROUTE


module.exports = router;
