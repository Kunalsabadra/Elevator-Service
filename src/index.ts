import express, { Express, Request, Response } from 'express';

import serverConfig from './config/server.config';
import apiRouter from './routes';

const app: Express = express();

app.use('/api', apiRouter);

// app.get('/api/test', (req: Request, res: Response) => {
//     res.json({ msg: "Hello" })
// })

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at PORT ${serverConfig.PORT}`);
});
