const PORT = 3000;
const express = require('express');
const shroomapp = express();
const shroombase = require('./database/hongosLista.json')

shroomapp.get('/', (req, res) => {
    res.send('toxic-shrrom-aaaapi');
})

shroomapp.get('/api/mushrooms', (req, res) => {
    //definir si quiere la lista total o la concisa
    //lista concisa: que no tenga registros vacios
    const lista = req.query.list
    let base;
    if (lista === 'concise'){
        base = shroombase.filter(el => el.img != '' && el.commonname != '' && el.distribution != '')
    } else { base = shroombase }

    //query del tipo de hongo
    const tipo = req.query.type;
    if (tipo === 'poisonous' || tipo === 'deadly') {
        const resultado = base.filter(el => el.type === tipo);
        res.send(resultado);
    } else {
        if (!tipo) {
            res.send(base)
        } else {
        }
    }
})

shroomapp.get('/api/randomshroom',(req,res)=>{
    const rndIndex = Math.floor(Math.random() * shroombase.length);
    res.send(shroombase[rndIndex]);
})

shroomapp.get('/api/randompic', (req, res) => {
    const filtroLista = shroombase.filter(el => el.img != '')
    const rndIndex = Math.floor(Math.random() * filtroLista.length);
    res.send(`<img src=${filtroLista[rndIndex].img}>`);
})


shroomapp.listen(PORT, () => {
    console.log(`Escuchando en ${PORT}`);
})
