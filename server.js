const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/database');

require('dotenv').config();

// Connect to the database
connectDB();

// Setting up EJS as view engine
app.set('view engine', 'ejs');

// Serving static files from the public directory
app.use(express.static(__dirname + '/public'));

// Example route for rendering EJS view
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Verse and Victory!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});