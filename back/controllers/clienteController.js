import clienteModel from '../models/clienteModel.js';

export const getClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getCliente = async (req, res) => {
    const {email} = req.params;
    try {
        const clienteEncontrado = await clienteModel.findOne({email});
        res.status(200).json(clienteEncontrado);
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
    const {_id} = req.params;
    try {
        await clienteModel.deleteOne({_id});
        res.status(200).json({message: 'Deleted'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateCliente = async (req, res) => {
    const {email} = req.params
    const obj = req.body
    try {
        const editClient = await clienteModel.updateOne({email}, {...obj})
        const updatedClient = await clienteModel.findOne({email})
        res.status(200).json({message: 'updated', status: editClient, updatedClient})
    }catch(err){res.status(400).json({message: err.message})}
}