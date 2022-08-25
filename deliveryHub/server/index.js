const express = require('express');
const bodyParser = require('body-parser');

// which domiains can make calls to the server? I guess that what CORS is for
// for now we are gonna configure it so it allows calls from our localhost
const cors = require('cors');

const db = require('./db');

const app = express();
const ProductRouter = require('./routes/productRouter.jsx');

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'Mongodb connection error:'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Food Order!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/', ProductRouter);
