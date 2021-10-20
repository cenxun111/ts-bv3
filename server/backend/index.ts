import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


app.use('/api', routes.authRouter)


// app.get('/',(req,res) => {
//     res.json({msg:"hello world"})
// }) 

import "./config/database"

const PORT = process.env.PORT || 7400
app.listen(PORT,() => {
    console.log('Server is running on port', PORT)
})



// MONGODB_URL="mongodb://localhost:27017/typesite"

// ACTIVE_TOKEN_SECRET = zhouenci
// ACCESS_TOKEN_SECRET = zhouencici
// REFRESH_TOKEN_SECRET = cenxun

// BASE_URL = http://localhost:8080

// MAIL_CLIENT_ID = 791323062843-psr21qapov3cfsuef6g8iqsm8inreev5.apps.googleusercontent.com
// MAIL_CLIENT_SECRET = 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
// MAIL_REFRESH_TOKEN = 1//04bAgC_znvWIfCgYIARAAGAQSNwF-L9Irxgj2lWog7KaZd-dCxgdXAboU-tdq4MS-TB0Bt4Frfg8JAB5J5QW5t7jzjGii0qfvbpI
// SENDER_EMAIL_ADDERSS = zhouenci1425@gmail.com