const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Init Cors

app.use(cors());

// Connect DB

connectDB();

// Init Built-In Parser

app.use(express.json({ extended: false }));

// Init Root Route

app.get('/', (req, res) =>
  res.send('Hello World, this the Code Mentor Center backend server.')
);

// Init API Routes

app.use('/api/register', require('./routes/api/register'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(chalk.yellow.inverse(`Server is running on port:${PORT}`))
);
