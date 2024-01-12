require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const dbConnection = require('./db/connect');
const notFound = require('./middleware/notFound');
const routes = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send('HomePage');    
});
app.use('/api/v1/contact',routes);
app.use(errorHandler);
app.use('',notFound);
const start = async ()=>{
    try {
        // Db connection
        await dbConnection(process.env.MONGO_URI);
        app.listen(port,()=>{console.log(`Listening on ${port}`)});
    } catch (error) {
        console.error(error);
    }
}

start();