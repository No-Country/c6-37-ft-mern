import clienteModel from '../models/clienteModel.js';

export const getClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCliente = async (req, res) => {
    const cliente = req.body;
    const newCliente = new clienteModel(cliente);
    try {
        await newCliente.save();
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteCliente = async (req, res) => {
    const email = req.params.email;
    try {
        await clienteModel.deleteOne({email});
        res.status(200).json({message: 'Deleted'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}