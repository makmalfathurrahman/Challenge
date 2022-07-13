const { User, Biodata, History } = require("../models");

class UserContoller {
  static async createUser(req, res, next) {
    try {
      const { name, UserId } = req.body;
      const data = await User.create({
        name,
        UserId,
      });
      res.status(201).json(data);
    } catch (error) {}
  }

  static async getUser(req, res, next) {
    try {
      const data = await User.findAll({
        include: [
          {
            model: Biodata,
          },
        ],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserContoller;
