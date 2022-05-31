const ArticuloManufacturado = require('../database/models').ArticuloManufacturado;
const RubroGeneral = require('../database/models').RubroGeneral;
const BajaLogica = require('../database/models').BajaLogica;

//Devuelve todas los elementos QUE ESTAN DE ALTA
const getArticulos = async(req,res) => {
    try{
        let result = await ArticuloManufacturado.findAll({
            include: [{
                model: BajaLogica,
                where: {bajaLogica: false}
            },{
                model: RubroGeneral,
                required: true
            }]
        });
        res.send(result);
    }catch(error){
        console.log(error);
    }
}

const getAllArticulos = async(req,res) => {
    try{
        let result = await ArticuloManufacturado.findAll({
            include: [{
                model: BajaLogica
            },{
                model: RubroGeneral,
                required: true
            }]
        });
        res.send(result);
    }catch(error){
        console.log(error);
    }
}

//Inserta nuevo elemento con su baja logica
const createArticulo = async(req,res) => {
    let {tiempoCocinaEstimado,denominacion,precioVenta,imagen,rubroGeneral_id} = req.body;
    try {
        //Se verifica que exista el Rubro General
        let rubro = await RubroGeneral.findByPk(rubroGeneral_id);
        if(!rubro){
            res.send("No se encontro rubro general")
            return;
        }
        //Se crea la baja lógica
        let newBajaLogica = await BajaLogica.create({
            bajaLogica: 0,
            fechaBaja: Date.now()
        })
        //Se crea elemento
        let newArticuloManuf = await ArticuloManufacturado.create({
            tiempoCocinaEstimado: tiempoCocinaEstimado,
            denominacion: denominacion,
            precioVenta: precioVenta,
            imagen: imagen,
            rubroGeneral_id: rubroGeneral_id,
            bajaLogica_id: newBajaLogica.id
        })
        console.log(newArticuloManuf);
        res.send("Se creo Articulo manufacturado")
    }catch(error){
        console.log(error);
        res.send({
            resultado: "No se pudo crear Articulo manufacturado",
            error: error
        })
    }
}

//Busca por id el elemento y lo marca como BAJA
const deleteArticulo = async(req,res) => {
    try{
        let idArt = parseInt(req.params.id);
        //Se busca el elemento
        let articuloManuf = await ArticuloManufacturado.findByPk(idArt);
        if(!articuloManuf){
            res.send("No se encontro Articulo Manufacturado")
            return;
        }
        //Se crea primero la baja lógica
        let newBajaLogica = await BajaLogica.create({
            bajaLogica: 1,
            fechaBaja: Date.now()
        })
        await ArticuloManufacturado.update({ bajaLogica_id: newBajaLogica.id }, {
            where: {
              id: idArt
            }
          });
          res.send("Se dio baja al Articulo Manufacturado")
    }catch(error){
        res.send(error);
    }
}

//Actualiza un elemento
const updateArticulo = async(req,res) => {
    try{
        let {tiempoCocinaEstimado,denominacion,precioVenta,imagen,rubroGeneral_id} = req.body;
        let idArt = parseInt(req.params.id);
        //Se busca la bebida, si no existe, envia un mensaje
        let articuloManuf = await ArticuloManufacturado.findByPk(idArt);
        if(!articuloManuf){
            res.send("No se encontro Articulo Manufacturado")
            return;
        }
        //Se verifica que exista el Rubro General
        let rubro = await RubroGeneral.findByPk(rubroGeneral_id);
        if(!rubro){
            res.send("No se encontro rubro general")
            return;
        }
        await ArticuloManufacturado.update({ 
            tiempoCocinaEstimado: tiempoCocinaEstimado,
            denominacion: denominacion,
            precioVenta: precioVenta,
            imagen: imagen,
            rubroGeneral_id: rubroGeneral_id}, {
            where: {
              id: idArt
            }
          });
          res.send("Se actualizo Articulo manufacturado");
    }catch(error){
        res.send(error);
    }
}

//Busca elemento por ID
const getArticuloId = async(req,res) => {
    try{
        let idArt = parseInt(req.params.id);
        let articuloManuf = await ArticuloManufacturado.findByPk(idArt,{
            include: [{
                model: BajaLogica
            },{
                model: RubroGeneral,
                required: true
            }]
        });
        if(!articuloManuf){
            res.send("No se encontro Articulo Insumo")
            return;
        }
        res.send(articuloManuf);
    }catch(error){
        res.send(error);
    }
}
module.exports = {getArticulos,getAllArticulos,createArticulo,deleteArticulo,updateArticulo,getArticuloId};