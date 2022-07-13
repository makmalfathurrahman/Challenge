const { User, Biodata, History } = require("../models");

class BiodataController {
  static async createBiodata(req, res, next) {
    try {
      const { Name, Age, FullName } = req.body;
      const _payload = {
        Name,
        Age,
        FullName,
      };

      const data = await Biodata.create(_payload);
      // console.log(data.datValues.Name, "<<<< DATA CREATE")
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getBiodatas(req, res, next) {
    try {
      const data = await Biodata.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getBiodata(req, res, next) {
    try {
      const id = req.params.id;
      const data = await Biodata.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: History,
          },
          {
            model: User,
          },
        ],
      });
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async editBiodata(req, res, next) {
    try {
      const { Name, Age, FullName } = req.body;
      const _payload = {
        Name,
        Age,
        FullName,
      };
      const id = req.params.id;
      const data = await Biodata.update(_payload, {
        where: {
          id,
        },
        returning: true,
      });
      console.log(data);
      res.status(201).json(data[1][0]);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBiodata(req, res, next) {
    try {
      const id = req.params.id;
      const data = await Biodata.destroy({
        where: {
          id,
        },
      });
      if (data) {
        res.status(200).json({
          msg: "Succes to delete",
        });
      } else {
        res.status(404).json({
          msg: "Fail to delete",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BiodataController;
