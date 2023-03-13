const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080
const cors = require('cors');
const routes = require('./routes.js')


app.use(cors());
app.use(express.json())
app.use(routes);



app.listen(port, () => console.log(`listening at http://localhost:${port}`))