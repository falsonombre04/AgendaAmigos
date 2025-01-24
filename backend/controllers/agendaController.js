const agendaModel = require('../model/agendaModel');


const createAmigo = async (req,res)=>{
	try{
		const datos = await agendaModel.create(req.body);
		res.status(201).json(datos);
	}
	catch(error){
		res.status(500).json(`Error en la creación de amigo:${error}`)
	}
}

const getAmigos = async (req,res)=>{
	try{
		const datos = await agendaModel.find();
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(`Error en la obtención de amigos:${error}`)
	}
}

const getAmigoById = async (req,res)=>{
	try{
		const {id} = req.params;
		const datos = await agendaModel.findById(id);
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(`Error en la obtención  de amigo:${error}`)
	}
}

const getAmigoByIdAndUpdate = async (req,res)=>{
	try{
		const {id} = req.params;
		const datos = await agendaModel.findByIdAndUpdate(id,req.body,{new:true});
		res.status(200).json(datos);
	}
	catch(error){
		res.status(500).json(`Error en la actualización de amigo:${error}`)
	}
}

const getAmigoAndDelete = async (req,res)=>{
	try{
		const {id} = req.params;
		const datos = await agendaModel.findByIdAndDelete(id);
		res.status(200).json("Amigo eliminado..");
	}
	catch(error){
		res.status(500).json(`Error en la eliminación de amigo de amigo:${error}`)
	}
}

module.exports = {createAmigo,getAmigos,getAmigoById,getAmigoByIdAndUpdate,getAmigoAndDelete};