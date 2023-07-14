const { Router } = require("express");
const {
  postSubTemasHandler,
  getSubTemaHandler,
  putSubTemaHandler,
  deletSubtTemaHandler,
} = require("../Handlers/subTenmaHandler");

const subTemaRouter = Router();

subTemaRouter.get("/", getSubTemaHandler);
// temaRouter.get("/:id", getTemaByIdHandler);
subTemaRouter.post("/", postSubTemasHandler);
subTemaRouter.put("/", putSubTemaHandler);
subTemaRouter.delete("/:id", deletSubtTemaHandler);

module.exports = subTemaRouter;
