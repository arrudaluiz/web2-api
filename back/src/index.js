import dotenv from "dotenv"
import express from "express"
// import routes from "./routes/index"
dotenv.config({ path: process.env.NODE_ENV === "test" ? ".env.test" : ".env" })

const app = express()

app.get('/', (req, res) => {
  res.send('Server listening...')
})

app.get('/sobre', (req, res) => {
  res.send('')
})

// routes(app)

export default app
