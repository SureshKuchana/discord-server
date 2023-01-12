import express from "express"
import helmet from "helmet"
import cors from "cors"
import dbInstance from "./src/models/index"

const app = express()
const port = 3000

const corsOptions: cors.CorsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}

async function startServer() {
  // middlewares
  // Helmet helps you secure your Express app by setting various HTTP headers
  app.use(helmet())
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(cors(corsOptions))

  try {
    // db connection

    await dbInstance.sequelize.authenticate()
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.")

    // sync the db with models
    await dbInstance.sequelize
      .sync({ force: true })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log(`All models were synchronized successfully`)
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(`Failed to Sync with models ${err}`)
      })

    app.get("/", (_, res) => res.send("Discord Server"))

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application running on port http://localhost:${port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", error.original)
  }
}

startServer()
