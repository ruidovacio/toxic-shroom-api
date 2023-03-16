const PORT = 3000;
const express = require('express');
const cors = require('cors');
const shroomapp = express();
shroomapp.use(cors());
const shroombase = require('./database/hongosLista.json')


shroomapp.get('/', (req, res) => {
    res.sendFile(__dirname  + '/public/index.html');
})

shroomapp.get('/api/mushrooms', (req, res) => {
    res.send(shroombase);
})

shroomapp.get('/api/mushrooms/:type',(req,res)=>{
    const tipo = req.params.type
    if(tipo != 'poisonous' || tipo != 'deadly'){
        const resultado = shroombase.filter(el => el.type === tipo)
        res.send(resultado);
    } else {
        res.status(400).send("Incorrect type");
    }
})

shroomapp.get('/api/mushrooms/randomshroom',(req,res)=>{
    const rndIndex = Math.floor(Math.random() * shroombase.length);
    res.send(shroombase[rndIndex]);
})

shroomapp.get('/api//mushrooms/randompic', (req, res) => {
    const filtroLista = shroombase.filter(el => el.img != '')
    const rndIndex = Math.floor(Math.random() * filtroLista.length);
    res.send(filtroLista[rndIndex].img);
})


shroomapp.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`);
})

module.exports = shroomapp
