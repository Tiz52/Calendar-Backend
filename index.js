const express = require ('express');
require('dotenv').config();

//Creamos el servidor
const app = express();

//Directorio Público
app.use( express.static('public') );

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen( process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} )