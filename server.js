const express = require('express');
const bodyParser = require('body-parser');
const groceryRoutes = require('./routes/grocery');
const eventRegister = require('./routes/user')
const errorController = require('./controllers/error')
const app = express();
const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use('/groceries',groceryRoutes);

/* Register */
app.use('/eventregister',eventRegister);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));