const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');

const dotenv = require("dotenv")
dotenv.config()

PORT = 3000

const app = express();

app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/users', userRouter);

app.listen(PORT, () => { console.log(`Server is running in port ${PORT}...`) });