const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/connectDB");
const path = require('path')
const dotenv = require("dotenv").config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
//HTTP request level Middleware
app.use(morgan("dev"));

app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server up and running");
});
