var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let food = require('../models/food');
let foodController = require('../controllers/food')
/* Get route for the foods list */
// Read Operation
router.get('/', foodController.Displayfood);
/* Get route for Add food page --> Create */
router.get('/add', foodController.Addfood); 
/* Post route for Add food page --> Create */
router.post('/add', foodController.Processfood);
/* Get route for displaying the Edit food page --> Update */
router.get('/edit/:id', foodController.Editfood);
/* Post route for processing the Edit food page --> Update */
router.post('/edit/:id', foodController.ProcessEditfood);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', foodController.Deletefood);

module.exports = router;