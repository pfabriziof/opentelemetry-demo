import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new ZipkinExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
  metricReader: new PrometheusExporter({
      port: 9464,
  }),
});
sdk.start();
