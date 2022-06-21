const Domicilio = require('../database/models').Domicilio;
const Usuario = require('../database/models').Usuario;
const BajaLogica = require('../database/models').BajaLogica;

//Devuelve todas los elementos QUE ESTAN DE ALTA
const getDomicilio = async(req,res) => {
    try{
        let result = await Domicilio.findAll({
            include: [{
                model: BajaLogica,
                required: true,
                where: {bajaLogica: false}
            },{
                model: Usuario,
                required: true,
                include: [{
                    model: BajaLogica,
                    required: true,
                    where: {bajaLogica: false}
                }]
            }]
        });
        res.send(result);
    }catch(error){
        console.log(error);
    }
}

const getAllDomicilio = async(req,res) => {
    try{
        let result = await Domicilio.findAll({
            include: [{
                model: BajaLogica
            },{
                model: Usuario,
                //Devuelve el elemento aunque no tenga asignado Usuario
                required: false
            }]
        });
        res.send(result);
    }catch(error){
        console.log(error);
    }
}

//Inserta nuevo elemento con su baja logica
const createDomicilio = async(req,res) => {
    let {usuario_id,calle,numero,localidad} = req.body;
    try {
        //Se verifica que exista el Usuario
        let usuario = await Usuario.findByPk(usuario_id);
        if(!usuario){
            res.send("No se encontro usuario")
            return;
        }
        //Se crea la baja lógica
        let newBajaLogica = await BajaLogica.create({
            bajaLogica: 0,
            fechaBaja: Date.now()
        })
        //Se crea elemento
        let newDomicilio = await Domicilio.create({
            usuario_id: usuario_id,
            calle: calle,
            numero: numero,
            localidad: localidad,
            bajaLogica_id: newBajaLogica.id
        })
        console.log(newDomicilio);
        res.send("Se creo Domicilio")
    }catch(error){
        console.log(error.parent.sqlMessage);
        res.send({
            resultado: "No se pudo crear Domicilio",
            error: error.parent.sqlMessage
        })
    }
}

//Busca por id el elemento y lo marca como BAJA
const deleteDomicilio = async(req,res) => {
    try{
        let idArt = parseInt(req.params.id);
        //Se busca el elemento
        let domicilio = await Domicilio.findByPk(idArt);
        if(!domicilio){
            res.send("No se encontro Domicilio")
            return;
        }
        //Se crea primero la baja lógica
        let newBajaLogica = await BajaLogica.create({
            bajaLogica: 1,
            fechaBaja: Date.now()
        })
        await Domicilio.update({ bajaLogica_id: newBajaLogica.id }, {
            where: {
              id: idArt
            }
          });
          res.send("Se dio baja al Domicilio")
    }catch(error){
        res.send(error);
    }
}

//Actualiza un elemento
const updateDomicilio = async(req,res) => {
    try{
        let {usuario_id,calle,numero,localidad} = req.body;
        let idArt = parseInt(req.params.id);
        //Se busca el elemento, si no existe, envia un mensaje
        let domicilio = await Domicilio.findByPk(idArt);
        if(!domicilio){
            res.send("No se encontro Domicilio")
            return;
        }
        //Se verifica que exista el Usuario
        let usuario = await Usuario.findByPk(usuario_id);
        if(!usuario){
            res.send("No se encontro usuario")
            return;
        }
        await Domicilio.update({ 
            usuario_id: usuario_id,
            calle: calle,
            numero: numero,
            localidad: localidad}, {
            where: {
              id: idArt
            }
          });
          res.send("Se actualizo Domicilio");
    }catch(error){
        res.send(error);
    }
}

//Busca elemento por ID
const getDomicilioId = async(req,res) => {
    try{
        let idArt = parseInt(req.params.id);
        let domicilio = await Domicilio.findByPk(idArt,{
            include: [{
                model: BajaLogica,
                required: true,
                where: {bajaLogica: false}
            },{
                model: Usuario,
                //Devuelve el elemento aunque no tenga asignado Usuario
                required: false,
                include: [{
                    model: BajaLogica,
                    required: true,
                    where: {bajaLogica: false}
                }]
            }]
        });
        if(!domicilio){
            res.send("No se encontro Domicilio")
            return;
        }
        res.send(domicilio);
    }catch(error){
        res.send(error);
    }
}
module.exports = {getDomicilio,getAllDomicilio,createDomicilio,deleteDomicilio,updateDomicilio,getDomicilioId};