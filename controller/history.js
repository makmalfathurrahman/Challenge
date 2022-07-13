const { Biodata, History } = require("../models");

class HistoryController {
  static async createHistory(req, res, next) {
    try {
      const { Name, UserId } = req.body;
      const data = await History.create({ Name, UserId });
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getHistory(req, res, next) {
    const data = await History.findAll({
      include: [
        {
          model: Biodata,
        },
      ],
    });

    res.status(200).json(data);
  }
}

module.exports = HistoryController;
