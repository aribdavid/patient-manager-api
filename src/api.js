const express = require('express')
const cors = require('cors');
const  bodyParser = require("body-parser")




const app = express()

app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT 

app.use(express.json());

// app.get('/', async (_req, res) => {


//   const getPatients = await patients.findAll();

//   return res.status(201).json(getPatients);
// });

app.listen(port, () => console.log(`Servidor online na porta ${port}`));