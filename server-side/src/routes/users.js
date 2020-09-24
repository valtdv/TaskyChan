const { Router} = require('express');
const router = Router();

const{ getUsers,createUsers,getUser} = require('../controllers/user.controller');

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    .get(getUser)

module.exports = router;