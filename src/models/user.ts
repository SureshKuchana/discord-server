import { Model, Sequelize, DataTypes } from "sequelize"

module.exports = (sequelize: Sequelize) => {
  class User extends Model {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    static assoicate(models: any) {
      // defing association methods her
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        field: "id",
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        field: "name",
        type: DataTypes.STRING,
      },
    },
    {
      modelName: "User",
      sequelize,
      tableName: "users",
    }
  )

  return User
}
