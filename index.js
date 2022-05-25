const express = require("express");
const app = express();
const cors = require("cors");
require("./config/database");

const PORT = process.env.PORT || 8000;
const productsRouter = require("./routes/products");
const userRouter = require("./routes/users");


// MIDDLEWARES
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("App is working!");
});

//RUNNING THE APP ON PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
