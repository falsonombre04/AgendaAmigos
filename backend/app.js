const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const router = require('./routes/router');
const connectDB = require('./config/db');


const PORT = process.env.PORT;
const URI = process.env.URI;

app.use(express.json())
app.use('/amigosAPI',router);



const run = async ()=>{
	try{
		await connectDB(URI);
		console.log("Conexión exitosa con la BBDD...")
		app.listen(PORT,()=>{
		console.log(`Ejecutando servidor en el puerto:${PORT}`)
		})
	}
	catch(error){
		console.log("Error conexion BBDD:",error);
	}
};

run();

