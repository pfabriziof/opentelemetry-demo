import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
// import {
//   PeriodicExportingMetricReader,
//   ConsoleMetricExporter,
// } from '@opentelemetry/sdk-metrics';

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new ZipkinExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
  // metricReader: new PeriodicExportingMetricReader({
  //   exporter: new ConsoleMetricExporter(),
  // }),
});

sdk.start();
