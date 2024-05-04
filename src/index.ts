import express, { Express } from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';

const app: Express = express();

app.use('/api', apiRouter);

// app.get('/api/test', (__: Request, res: Response) => {
//     res.json({ msg: "Hello" });
// });

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at PORT ${serverConfig.PORT}`);
});
