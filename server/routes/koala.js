const express = require('express');
const router = express.Router();
const Koala = require('../models/koala.schema');
//require schemas here
router.get('/', (req, res)=>{
    console.log('got to pets GET');
    Koala.find({}).then((data)=>{
        console.log('here is our data', data);
        res.send(data);
    }).catch( (error)=>{
        console.log('error on GET', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res)=>{
    console.log('got to koalas post');
    let newKoala = new Koala(req.body);

    newKoala.save().then( (data)=>{
        console.log(data);
        res.sendStatus(201);
    }).catch( (error)=> {
        console.log(error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    Koala.findByIdAndRemove({
        _id : req.params.id
    }).then( (responseFromMongoDB) => {
        console.log(responseFromMongoDB);

        res.sendStatus(200);
    });
});

module.exports = router;