import express from 'express';
import chalk from 'chalk';
import Debug from "debug";
import morgan from 'morgan';
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

    res.send("Hello Earng Jaa");
})

const debug = Debug("app.js");
app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(" : " +port));
})
