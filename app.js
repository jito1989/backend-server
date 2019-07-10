// Requires 
var express = require('express');
var mongoose =require('mongoose');

// inicializacion de variables
var app = express();

// conecxion a la bd

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err, res)=>{
    if(err) throw err;
    console.log('BD online');

});

// rutas
app.get('/', (req, res, next)=>{

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

} );

// Escuchar peticiones
app.listen(3000, ()=>{
    console.log('Express server puerto 3000: online');
});