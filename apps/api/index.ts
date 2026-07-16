import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import routes from './routes/index'

dotenv.config()

const app = express()

const allowedOrigins = [
  'https://sip-happens-admin.netlify.app',
  'https://sip-happens-cafe.netlify.app',
]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)

app.use(express.json())

app.use(cookieParser())

app.use('/api', routes)

app.get('/', (_req, res) => {
  res.send('Sip Happens API is running 🚀')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})