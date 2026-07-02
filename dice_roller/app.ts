import { metrics, trace } from '@opentelemetry/api';
import express, { Express } from 'express';
import { rollTheDice } from './dice';

const tracer = trace.getTracer('dice-server', '0.1.0');
const meter = metrics.getMeter('dice-server', '0.1.0');

const PORT: number = parseInt(process.env.PORT || '8080');
const app: Express = express();

app.get('/', (req, res) => {
    res.send('Hellow World!')
})

app.get('/rolldice', (req, res) => {
    const rolls = req.query.rolls ? parseInt(req.query.rolls.toString()) : 2;
    if (isNaN(rolls)){
        res
            .status(400)
            .send("Request parameter 'rolls' is missing or not a number")
        return;
    }
    res.send(JSON.stringify(rollTheDice(rolls, 1, 6)));
});

app.get('/date', (req, res) => {
    res.json({ today: new Date()})
})

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
