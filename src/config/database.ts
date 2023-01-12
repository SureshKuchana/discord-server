import env from "./environment"
import { Sequelize } from "sequelize"

// for DB URL
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const dbConfig = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  {
    host: env.DATABASE_HOSTNAME,
    dialect: "postgres",
  }
)

export default dbConfig
