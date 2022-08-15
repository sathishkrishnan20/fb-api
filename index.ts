import express, { Express } from 'express';
import Facebook from './src/services/facebook/router';

const app: Express = express();
app.use(express.json());

const port = process.env.PORT;

const facebookInstance = new Facebook();
app.use('/', facebookInstance.router)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
