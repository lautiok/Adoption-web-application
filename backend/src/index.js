import express from "express";
import cors from "cors";
import config from "./config/config.js";
import session from "./routes/session.routes.js";
import adopt from "./routes/adopt.routes.js";
import adopted from "./routes/adopted.routes.js";
import { connect } from "./dao/mongo/database.js";
import fileUpload from "express-fileupload";
import cookieParser from 'cookie-parser';
import newAdopted from "./routes/newAdopt.routes.js";
import compression from 'express-compression';

const app = express();

// Middlewares
app.use(express.json());
app.use(compression({ brotli: { enabled: true, zlib: {} } }));
app.use(cookieParser());
app.use(cors({
    origin: config.origin,
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));


app.get('/', (req, res) => {
    res.send('Hello backend pets!');
});

// Routes
app.use('/api/session', session);
app.use('/api/pets', adopt);
app.use('/api/adopted', adopted);
app.use('/api/newadopted', newAdopted);

connect();

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

export default app