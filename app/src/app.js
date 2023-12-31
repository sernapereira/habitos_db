const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const router = require("./Routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173 https://habitos-eight.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const corsOptions = {
  origin: 'https://habitos-eight.vercel.app'
};
app.use(cors(corsOptions));

app.use("/", router);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
