const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello World! 🚀 This is my CI/CD demo app.');
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
