const express = require ('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//Creamos el servidor
const app = express();

//base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio Público
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.listen( process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} )