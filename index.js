const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send('App is working!');
});

//RUNNING THE APP ON PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});