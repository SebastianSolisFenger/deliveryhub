const express = require('express');
const bodyParser = require('body-parser');

// which domiains can make calls to the server? I guess that what CORS is for
// for now we are gonna configure it so it allows calls from our localhost
const cors = require('cors');

const db = require('./db');

const app = express();
