const express = require('express')
const router = express.Router();
const {createAmigo,getAmigos,getAmigoById,getAmigoByIdAndUpdate,getAmigoAndDelete} = require('../controllers/agendaController')

router.get('/amigos',getAmigos);
router.get('/amigos/amigo/:id',getAmigoById);
router.post('/amigos/create',createAmigo);
router.put('/amigos/amigo/:id',getAmigoByIdAndUpdate);
router.delete('/amigos/amigo/:id',getAmigoAndDelete);

module.exports = router;