"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    static associate(models) {
      Biodata.hasMany(models.Biodata);
      Biodata.hasMany(models.History);
    }
  }
  Teachers.init(
    {
      Name: DataTypes.STRING,
      Age: DataTypes.INTEGER,
      FullName: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Teachers",
    }
  );
  return Teachers;
};
