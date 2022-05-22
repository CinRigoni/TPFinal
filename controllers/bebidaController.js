
const Bebida = require('../database/models').Bebida;
const BajaLogica = require('../database/models').BajaLogica;

const getBebidas = (req,res) => {
    res.send("getBebidas")
}
const createBebidas = async(req,res) => {
    const {nombreBebida,precioCompra,precioVenta,stockActual,unidadMedida} = req.body;
    try {
        //Se crea primero la baja lógica
        const newBajaLogica = await BajaLogica.create({
            bajaLogica: 0,
            fechaBaja: Date.now()
        })
        //Se crea bebida
        const newBebida = await Bebida.create({
            nombreBebida: nombreBebida,
            precioCompra: precioCompra,
            precioVenta: precioVenta,
            stockActual: stockActual,
            unidadMedida: unidadMedida,
            bajaLogica_id: newBajaLogica.id
        })
        console.log(newBebida);
        res.send("Se creo bebida")
    }catch(error){
        console.log(error.parent.sqlMessage);
        res.send({
            resultado: "No se pudo crear bebida",
            error: error.parent.sqlMessage
        })
    }
}
const deleteBebidas = (req,res) => {
    res.send("delete bebidas")
}
const updateBebidas = (req,res) => {
    res.send("update bebidas")
}
const getBebidasId = (req,res) => {
    res.send("getbebiba id")
}
module.exports = {getBebidas,createBebidas,deleteBebidas,updateBebidas,getBebidasId};