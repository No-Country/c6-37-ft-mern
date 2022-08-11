import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import documentRoutes from './routes/documents.js';
import clienteRoutes from './routes/clienteRoutes.js';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json());
app.use(cors());

// app.use('/documents', documentRoutes);
app.use('/clientes', clienteRoutes);

const CONNECTION_URL = 'mongodb+srv://petsociety:petsociety@cluster0.4j2rl.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error.message));