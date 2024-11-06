
import express from 'express';
import router from "./routes/api.js";
import { PORT } from './app/config/config.js';

const app = express();

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})