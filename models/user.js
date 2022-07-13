"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Teachers, { foreignKey: "UserId" });
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      TeacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
