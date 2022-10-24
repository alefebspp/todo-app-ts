import express from 'express';
import routes from './routes/routes';
import connectToMongoDB from './database';
import cors from 'cors';

const app = express();
app.use(cors());
connectToMongoDB();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Connected!');
});
