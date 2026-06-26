import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes/index'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
)

app.use(express.json())

app.use('/api', routes)

app.get('/', (_req, res) => {
  res.send('Sip Happens API is running 🚀')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})