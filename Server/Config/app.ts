import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//database modules
import mongoose from 'mongoose';
import db from './db';

mongoose.connect(db.remoteURI);

//DB connection events
mongoose.connection.on('connected', () =>{
    console.log(`connected to MongoDB`);
});

mongoose.connection.on('disconnected', () =>{
    console.log(`Disconnected from MongoDB`);
})

import indexRouter from '../Routes/index';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);

export default app;
