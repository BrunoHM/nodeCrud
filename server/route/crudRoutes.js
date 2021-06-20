const express = require('express');
var moment    = require('moment');

const router  = express.Router();
const crudsService = require('../service/crudService');

const cors    = require('cors')
router.use(cors());

router.get('/status', function(req, res) {
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({"online":true});
});


router.get('/simpleTable', async function(req, res) {
    const cruds = await crudsService.getData();
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({"result":cruds});
});


router.post('/simpleTable', async function(req, res) {
    let name = req.query.nome;
    let number = req.query.numero;
    console.log(req.query);
    if(name){
        let createDate = moment().format('YYYY-MM-DD');
       
        const cruds = await crudsService.insertData(name, number, createDate);
        console.log(cruds)
        res.status(200).send(cruds);
    } else {
        res.status(400).send("Nome não informado!");
    }
});

router.put('/simpleTable', async function(req, res) {
    const id   = req.query.id;
    const name = req.query.nome;
    const age  = req.query.idade;

    console.log(req.query);

    if(name && age){       
        const cruds = await crudsService.updateData(id, name, age);
        console.log(cruds)
        res.status(200).send(cruds);
    } else {
        res.status(400).send("Nome não informado!");
    }
});

router.delete('/simpleTable', async function(req, res) {
    let idRecord = req.query.id;

    console.log(req.query.id);

    if(idRecord){
        const cruds = await crudsService.deleteData(idRecord);
        console.log(cruds)
        res.status(200);
        res.send({cruds});
    } else {
        res.status(400);
        res.send("ID não informado!");
    }
});

module.exports = router;