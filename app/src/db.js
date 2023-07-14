require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Sequelize, Op } = require("sequelize");
const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

//devuelve el nombre del archivo sin la ruta completa
const basename = path.basename(__filename);

const modelDefiners = [];

//cargar en el array modelDefiner todos los modelos de Sequelize definidos en archivos js que estan almacenados en "models"
fs.readdirSync(path.join(__dirname, "./models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "./models", file)));
  });

//carga todos los modelos de sequelize
modelDefiners.forEach((model) => model(sequelize));

//Capitaliza todos los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

//Accedo a los modelos haciendo destructuring

const { Tema, Subtemas } = sequelize.models;

Tema.belongsToMany(Subtemas, { through: "Tema_Subtemas" });

module.exports = { ...sequelize.models, sequelize };
