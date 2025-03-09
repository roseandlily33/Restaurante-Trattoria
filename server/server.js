const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const router = require("./routers");
const { connectToMongoose } = require("./config/connection");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const buildPath = path.join(__dirname, "../client/build");
if (fs.existsSync(buildPath)) {
  console.log("Build folder exists:", buildPath);
} else {
  console.log("Build folder does not exist:", buildPath);
}

app.use(morgan("combined"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_ROUTE,
    methods: ["GET", "POST", "PUT", "DELETE"],
    //allowedHeaders: ['Content-Type', 'Authorization']
    //credentials: true,
    //preflightContinue: false,
    //optionsSuccessStatus: 204,
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));
app.use((req, res, next) => {
  next();
});

app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

async function startServer() {
  await connectToMongoose();
  await app.listen(PORT, () => {
    console.log("Listening on port mongoose", PORT);
  });
}

startServer();
