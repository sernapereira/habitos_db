const app = require("./app/src/app");
const { sequelize } = require("./app/src/db");
require(`dotenv`).config();

app.listen(process.env.PORT, () => {
  sequelize.sync({ force: false });
  console.log(`listening on port  🎶 ------------->> ✔✔`, process.env.PORT);
});
