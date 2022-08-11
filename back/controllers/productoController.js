import productoModel from '../models/productoModel.js';

export const getProductos = async (req, res) => {
    try {
        const productos = await productoModel.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createProducto = async (req, res) => {
    const producto = req.body;
    const newProducto = new productoModel(producto);
    try {
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteProducto = async (req, res) => {
    const codigo = req.params.id;
    try {
        await productoModel.deleteOne({codigo: codigo});
        res.status(200).json({message: 'Deleted'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}