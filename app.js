import express from 'express';

import { router as pageRouter } from './routes/pageRoutes.js';
import { router as adminRouter } from './routes/adminRoutes.js';

const app = express();

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use routes
app.use(pageRouter);
app.use(adminRouter);

const PORT = 80;
app.listen(PORT);