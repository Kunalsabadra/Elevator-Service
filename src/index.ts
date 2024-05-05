import bodyParser from "body-parser";
import express, { Express } from 'express';

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from './config/serverConfig';
import sampleQueueProducer from './producers/sampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/sampleWorker';

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());

// app.get('/api/test', (__: Request, res: Response) => {
//     res.json({ msg: "Hello" });
// });

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at PORT ${serverConfig.PORT}`);
});


sampleQueueProducer('SampleJob', {
    name: "Kunal",
    company: "Microsoft",
    position: "SD1",
    location: "Banglore"
});
SampleWorker('SampleQueue');


