const express = require('express');
const router = express.Router();
const controllerName = require('controllerPath');

//Get object list
router.get('/', controllerName.index);

//Get object by ID
router.get('/:id', controllerName.getUser);

//Create
router.post('/', controllerName.newUser);

//Update
router.patch('/:id', controllerName.updateUser);

//Delete
router.delete('/:id', controllerName.deleteUser);

module.exports = router;
