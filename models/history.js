"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  History.init(
    {
      Name: DataTypes.STRING,
      TeacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
