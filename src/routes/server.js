const express = require ("express");
const app = express();
const axios = require ("axios");
const cors = require ("cors");   
const morgan = require ("morgan");


//MIDDLEWARE => ES EXPRESS.JSON => TIENE QUE IR ACÁ ARRIBA  
app.use(express.json());          //.json => ME SIRVE PARA ENVIAR CODIGO JS (OBJ, ARRAYS, etc)
app.use(cors());
app.use(morgan("dev"));  

//app.use("/users", usersRouter);
//const usersRouter = require ("express").Router();



//CREACION DE RUTAS

 app.get("/rickandmorty/character/:id", async (req, res) => {
    
    try {
        const {id} = req.params;

        const response = await axios (`http://rickandmortyapi.com/api/character/${id}`);
        const data = response.data;  //EN LA PROP DATA ENCUENTRO LA INFO DE LA API

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image,
        }

        res.status(200).json(infoCharacter);

    } catch (error) {
        res.status(404).send(error.message);       //.SEND => ME SIRVE PARA ENVIAR TEXTO PLANO
    }
})




 app.get("/rickandmorty/detail/:detailId", async (req, res) => {
    try {
        const { detailId } = req.params;
    
        const response = (await axios (`http://rickandmortyapi.com/api/character/${detailId}`)).data;
    
    
        const infoCharacterDetail = {
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            image: response.image,
            origin: response.origin,
        }
    
        res.status(200).json(infoCharacterDetail);
    
     } catch (error) {
         res.status(404).send(error.message);
    
    }
    
    })
    
    
    
    let fav = []; //NUESTRA BASE DE DATOS TIENE QUE SER LET, PARA IR PISANDOLA
    
    app.get("/rickandmorty/fav", (req, res) => {
        res.status (200).json(fav);
    })
    


    //METODO POST LLEGA INFO POR BODY
    app.post("/rickandmorty/fav", (req, res) => {
        fav.push(req.body);

        res.status(200).send("Se guardaron correctamente los datos");
    })
    


    app.delete("/rickandmorty/fav/:id", (req, res) => {
        const { id } = req.params;
    
        const favFiltered = fav.filter(char => char.id !== parseInt(id));
        fav = favFiltered;
        
        res.status(200).send("Se eliminó correctamente");
    })
    
    
    
    


 module.exports = app;












