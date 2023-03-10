const express = require("express");
const router = express.Router();
const userRouter = require("../src/users/user.route");
const authRouter = require("../src/auths/auth.route");
const boardRouter = require("../src/boards/board.route");
const adminRouter = require('../src/admin/admin.route')
const forumRouter = require("../src/forum/forum.route");

router.use("/users", userRouter);
router.use("/auths", authRouter);
router.use("/boards", boardRouter);
router.use("/forum", forumRouter);
router.use("/admin", adminRouter)

module.exports = router;

