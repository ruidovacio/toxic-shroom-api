const PORT = 3000;
const express = require('express');
const cors = require('cors');
const shroomapp = express();
shroomapp.use(cors());
const shroombase = require('./database/hongosLista.json')


shroomapp.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

shroomapp.get('/api/mushrooms', (req, res) => {
    res.send(shroombase);
})

shroomapp.get('/api/mushrooms/:parameter', (req, res) => {
    const tipo = req.params.parameter;
    if (tipo === 'poisonous' || tipo === 'deadly') {
        const resultado = shroombase.filter(el => el.type === tipo)
        res.send(resultado);
    } else if (tipo === 'randomshroom') {
        const rndIndex = Math.floor(Math.random() * shroombase.length);
        res.send(shroombase[rndIndex]);
    } else if (tipo === 'randompic'){
        const filtroLista = shroombase.filter(el => el.img != '')
        const rndIndex = Math.floor(Math.random() * filtroLista.length);
        res.send(filtroLista[rndIndex].img);
    } else {
        res.status(400).send("Invalid request");
    }
})


shroomapp.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`);
})

module.exports = shroomapp
