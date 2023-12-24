import express from 'express'
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from 'cors';
import router from './app/Route';

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;
console.log("🚀 ~ file: index.ts:10 ~ port:", port)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/', router);
app.listen(port, () => {
    console.log(`app is running on Port ${port}`);
})