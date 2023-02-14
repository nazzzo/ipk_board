const {
    sequelize: {
        models: { User, PointUp },
    },
} = require("../../models");

const UserRepository = require("./user.repository");
const UserService = require("./user.service");
const UserController = require("./user.controller");
const config = require("../../config");

const JWT = require("../../lib/jwt");
const crypto = require("crypto");

const jwt = new JWT({ crypto, SALT: "web7722" });
const userRepository = new UserRepository({ User, PointUp });
const userService = new UserService({ userRepository, jwt, config });
const userController = new UserController({ userService });

module.exports = {
    userController,
    userRepository,
};

