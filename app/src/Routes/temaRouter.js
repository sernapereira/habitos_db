const { Router } = require("express");
const {
  getTemasHandler,
  postTemasHandler,
  putTemaHandler,
  deletTemaHandler,
  getTemaByIdHandler,
} = require("../Handlers/temaHandler");

const temaRouter = Router();

temaRouter.get("/", getTemasHandler);
temaRouter.get("/:id", getTemaByIdHandler);
temaRouter.post("/", postTemasHandler);
temaRouter.put("/", putTemaHandler);
temaRouter.delete("/:id", deletTemaHandler);

module.exports = temaRouter;
