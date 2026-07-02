import { trace, metrics } from '@opentelemetry/api';

const tracer = trace.getTracer('dice-lib');
const meter = metrics.getMeter('dice-libe');
const counter = meter.createCounter('dice-lib.rolls.counter');

function rollOnce(min: number, max: number) {
    counter.add(1)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function rollTheDice(rolls: number, min: number, max: number){
    const result: number[] = [];
    for (let i = 0; i < rolls; i++) {
        result.push(rollOnce(min, max));
    }
    return result;
}
