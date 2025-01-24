const mongoose = require('mongoose');
const agendaSchema = new mongoose.Schema({

	nombre:{type:'String'},
	numero:{type:'String'},
	edad:{type:'Number'},
	correo:{type:'String'}
})

const agendaModel = mongoose.model('agenda',agendaSchema);

module.exports = agendaModel