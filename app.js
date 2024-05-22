import express from 'express';
import session from 'express-session';

import { router as pageRouter } from './routes/pageRoutes.js';
import { router as adminRouter } from './routes/adminRoutes.js';

const app = express();

// Session
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    'secret': 'secret key',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

// Parse data from any form
app.use(express.urlencoded({extended: true}));

// Use routes
app.use(pageRouter);
app.use(adminRouter);

const PORT = 80;
app.listen(PORT);