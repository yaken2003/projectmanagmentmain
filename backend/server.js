const express = require('express');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models/db');

// Enable CORS for specific origin (for example, your frontend URL)
// Enable CORS for all origins
const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers (you can add more if needed)
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Enable CORS
app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// ✅ Add a simple API route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: "API is working!" });
});
// Use routes
app.use(userRoutes);
app.use(projectRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


module.exports = app;
