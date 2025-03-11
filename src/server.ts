import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import exRouter from './routes/routes'
dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

app.use('/', exRouter)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})