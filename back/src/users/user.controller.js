class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }
    async postSignup(req, res, next) {
        try {
            console.log("BE postSignup req.body:::::", req.body);
            const user = await this.userService.signup(req.body);
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    }
    async postUserCheck(req, res, next) {
        console.log(`con :`, req.body);
        try {
            // const { userid } = req.body;
            const user = await this.userService.userCheck(req.body);
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    }

    async getMe(req, res, next) {
        try {
            if (!req.headers.authorization) throw new Error("No Authorization");
            const [type, token] = req.headers.authorization.split(" ");
            if (type.toLowerCase() !== "bearer") throw new Error("Authorization Type Error");
            const user = await this.userService.me(token);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }
    async putProfile(req, res, next) {
        try {
            console.log("req.body:", req.body);
            const token = await this.userService.putProfile(req.body);
            console.log(`token :::::::::`, token);
            // res.cookie('token', token)
            res.json({ token });
        } catch (e) {
            next(e);
        }
    }
    async deleteUser(req, res, next) {
        try {
            console.log(req.params.id);
            const result = await this.userService.deleteUser(req.params.id);
            res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async getPoint(req, res, next) {
        try {
            const { userid } = req.params;
            const point = await this.userService.findPoint(userid);
            console.log("point", point);
            res.json(point);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = UserController;

