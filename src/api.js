const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routers');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;

app.use(express.json());

app.use('/', router.patient);
app.use(errorHandler);

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
