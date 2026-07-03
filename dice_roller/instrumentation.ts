import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

const sdk = new opentelemetry.NodeSDK({
    resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: 'dice-server',
    }),
    traceExporter: new ZipkinExporter({
        url: 'http://zipkin:9411/api/v2/spans',
    }),
    metricReader: new PrometheusExporter({
        port: 9464,
    }),
    instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();
