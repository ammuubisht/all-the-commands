import express from 'express';
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 8000;
app.use(express.json({ limit: '20mb' }));
app.use(
    express.urlencoded({
        extended: false,
        limit: '20mb',
    }),
);
app.use(cors());

app.use('/api', routes);
app.listen(port, () => console.log(`Server started on port - ${port}`));
