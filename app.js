import express from 'express';
import chalk from 'chalk';
import debug from "debug";
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.get("/", (req,res) => {

    res.send("Hello Earng naka");
})

const Debug = debug("app.js");
app.listen(port, ()=>{
    Debug("Listening on port" + chalk.green(" : " +port));
})
