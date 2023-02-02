const {
    sequelize: {
        models: { Board, Hashtag, Comment, User, Hash, Liked },
    },
    sequelize,
} = require("../../models/index");

const BoardRepository = require("./board.repository");
const BoardService = require("./board.service");
const BoardController = require("./board.controller");
const config = require("../../config");

const repository = new BoardRepository({ sequelize, Board, Hashtag, Comment, User, Hash, Liked });
const service = new BoardService({ boardRepository: repository, config });
const controller = new BoardController({ boardService: service });

module.exports = {
    repository,
    service,
    controller,
};

