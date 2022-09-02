// use .env file
require('dotenv').config();

// imports
const express = require('express');
const mongoose = require('mongoose');
const patientRoute = require('./routes/patientRoute');
const userRoute = require('./routes/auth');
const errorHandler = require('./middleware/error');
const prvte = require("./routes/private");

const app = express();
 
// Middleware
app.use(express.json());

app.use(errorHandler);

// DB connection
mongoose.connect(process.env.DB_URI,)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to databse & started listening on port ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log(err);
  })

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


app.use('/api/patients', patientRoute);
app.use('/api/auth', userRoute);
app.use('/api/private', prvte);


// 404 page
app.use((req, res) => {
  res.status(404).json({ msg: 'Page not found' });
})
