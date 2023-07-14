const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tema",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descriccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagenPrincipal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
