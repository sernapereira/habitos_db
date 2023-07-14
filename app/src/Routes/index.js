const { Router } = require("express");
const temaRouter = require("./temaRouter");
const subTemaRouter = require("./subTemaRouter");
// const raceRouter = require("./raceRouter");
// const usersRouter = require("./usersRouter");
// const adminRouter = require("./adminRouter");

const router = Router();

router.use("/temas", temaRouter);
router.use("/sub", subTemaRouter);
// router.use("/users", usersRouter);
// router.use("/admin", adminRouter);

module.exports = router;
