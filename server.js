const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

app.get('/test', (req, res) =>
  res.send('Hello World, this the Code Mentor Center backend server.')
);

// Init Built-In BodyParser
app.use(express.json({ extended: false }));

// Init API routes

app.use('/api/users', require('./routes/api/register'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
