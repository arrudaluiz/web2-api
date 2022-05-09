import "dotenv/config"
import app from "./index.js"

app.listen(process.env.PORT, () =>
  console.info(`listening at http://localhost:${process.env.PORT}`)
)
