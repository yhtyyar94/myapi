var express = require('express');
var router = express.Router();

const besiktasPlayersControllers = require('../controllers/besiktasPlayers.controllers')

/* GET home page. */
router.get('/besiktas-players', besiktasPlayersControllers.getAllPlayers);
router.get('/besiktas-players/:id', besiktasPlayersControllers.getPlayerById);
router.put('/besiktas-players/:id', besiktasPlayersControllers.updatePlayerById);
router.post('/besiktas-players', besiktasPlayersControllers.createPlayer);
router.delete('/besiktas-players/:id', besiktasPlayersControllers.deletePlayerById);

module.exports = router;