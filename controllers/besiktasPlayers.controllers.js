const PlayersModel = require('../models/besiktasPlayers.model')


exports.getAllPlayers = async (req, res, next) => {
    await PlayersModel.find().then(response => res.json(response)).catch(err => next(err))
}

exports.getPlayerById = async (req, res, next) => {
    await PlayersModel.findById({_id: req.params.id}).then(response => res.json(response)).catch(err => next(err))
}

exports.createPlayer = async (req, res, next) => {
    const newPlayer = new PlayersModel(req.body)

    newPlayer.save()

    res.json({message: 'Player created.', newPlayer})
}

exports.updatePlayerById = async (req, res, next) => {
    await PlayersModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(response => res.json(response)).catch(err => next(err))
}

exports.deletePlayerById = async (req, res, next) => {
    await PlayersModel.findByIdAndDelete({_id: req.params.id}).then(response => res.json(response)).catch(err => next(err))
}