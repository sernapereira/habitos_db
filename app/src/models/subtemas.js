const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "subtemas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      subTitulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subdescripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
