// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './routes';
import cookieParser from 'cookie-parser';

const app = express();
const port = 1407;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

route(app);

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
