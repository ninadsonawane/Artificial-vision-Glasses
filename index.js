import mongoose from "mongoose"
import express from "express"
import dotenv, { config } from "dotenv"
const app = express()
import cors from "cors"

dotenv.config();
const PORT = process.env.PORT || 6060
const URL = process.env.URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use(cors())
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
  console.log("DB Connected!")
}

app.get('/' , (req , res) => {
  res.send("Ninad Sonawane")
})

app.listen( PORT , () => {
    console.log(`Server is running on ${PORT}`);
})
