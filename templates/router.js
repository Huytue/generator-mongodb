const express = require('express');
const router = express.Router();
const controllerName = require('controllerPath');

//Get object list
router.get('/', controllerName.index);

//Get object by ID
router.get('/detail/:id', controllerName.getcontrollerName);

//Create
router.post('/add', controllerName.newcontrollerName);

//Update
router.put('/edit/:id', controllerName.updatecontrollerName);

//Delete
router.delete('/delete/:id', controllerName.deletecontrollerName);

module.exports = router;
