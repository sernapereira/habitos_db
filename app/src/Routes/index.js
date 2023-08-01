const { Router } = require("express");
const temaRouter = require("./temaRouter");
const subTemaRouter = require("./subTemaRouter");


const router = Router();

router.use("/temas", temaRouter);
router.use("/sub", subTemaRouter);

module.exports = router;
