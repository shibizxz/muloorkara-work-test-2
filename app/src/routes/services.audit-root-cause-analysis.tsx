import { createFileRoute } from '@tanstack/react-router'
import { ServiceDetail, pageHead } from '../components/Site'
import { services } from '../content/site'
export const Route = createFileRoute('/services/audit-root-cause-analysis')({ head: () => pageHead('Audit & Root Cause Analysis', services[3].short), component: () => <ServiceDetail service={services[3]} /> })
