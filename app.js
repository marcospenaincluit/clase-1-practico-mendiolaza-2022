const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// requerir el arreglo de players en data.json
app.use(express.json());

//Ruta que devuelva el array de players
app.get('/players', (req, res) => {
//completar
});

//Devolver un sub arreglo de players filtrado por rol pasado por parametro
app.get('/players/:role', (req, res) => {
//completar
});

//Operacion que agregaría un nuevo player.
//Verificar que el body de la request contiene las claves: name, lastname, role, team.
//Si todos los datos están presentes, devolver status 200 y {"operation": "add player", "status": "OK"}
//Si faltase alguna de las claves, devolver status 400 y {"operation": "add player", "status": "Bad request, check your parameters"}
app.post('/players', (req, res) => {
//completar
});

app.listen(port, () => {
    console.log(players);
    console.log('Express server started at port ' + port)
});