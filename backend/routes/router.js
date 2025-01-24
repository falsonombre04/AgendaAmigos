const express = require('express')
const router = express.Router();
const {createAmigo,getAmigos,getAmigoById,getAmigoByIdAndUpdate,getAmigoAndDelete} = require('../controllers/agendaController')
const {validarAgenda} = require('../validators/validarAgenda');
const validar = require('../middleware/validar')

router.get('/amigos',getAmigos);
router.get('/amigos/amigo/:id',getAmigoById);
router.post('/amigos/create',validarAgenda,validar,createAmigo);
router.put('/amigos/amigo/:id',validarAgenda,validar,getAmigoByIdAndUpdate);
router.delete('/amigos/amigo/:id',getAmigoAndDelete);

module.exports = router;