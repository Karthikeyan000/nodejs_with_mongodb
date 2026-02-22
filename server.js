require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const accountRoutes = require("./routes/account.routes");

const app = express();
app.use(express.json());

app.use("/api/accounts", accountRoutes);

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});