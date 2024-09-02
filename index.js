const express = require("express");
const app = express();
const port = 3000;

// Dummy data
const dummyData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

// API endpoint to get dummy data
app.get("/api/data", (req, res) => {
  res.json(dummyData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
