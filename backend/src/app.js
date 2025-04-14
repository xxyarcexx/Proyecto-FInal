const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT
console.log(port)
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});

app.use(errorHandler);

module.exports = app;
