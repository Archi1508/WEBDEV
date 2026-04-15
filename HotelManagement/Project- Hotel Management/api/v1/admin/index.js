const { Router } = require("express");
const { hotelsRouter } = require("./hotels");
const {valiidateUser} = require("../../../middlewares/authHandler")

const adminRouter = Router();

adminRouter.use("/hotels", hotelsRouter);

// TODO:
// adminRouter.use("/rooms", roomsRouter);

module.exports = { adminRouter };
