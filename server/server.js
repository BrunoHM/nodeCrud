const express = require('express');
const app = express();
const crudsRoute = require('./route/crudRoutes');
const cors    = require('cors')


app.use(crudsRoute);
app.listen(3333);
app.use(cors());