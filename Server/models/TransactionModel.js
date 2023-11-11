const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TransactionModel extends Model {}

TransactionModel.init(
  {
    expense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "transactionData",
  }
);

module.exports = TransactionModel;
