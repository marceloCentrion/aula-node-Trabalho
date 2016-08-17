var express = require('express');
var router = express.Router();
//var express = require('./models/pokemon');
const Controller = require('./controller');


router.post('/', (req, res, next) =>{
	PokemonModel.create(req,res);
});

/* GET users listing. */
router.get('/', Controller.find)

//router.get('/:id', Controller.findOne)

router.post('/', Controller.create)	

// router.put('/:id', Controller.update)

// router.delete('/:id', Controller.remove)

module.exports = router
