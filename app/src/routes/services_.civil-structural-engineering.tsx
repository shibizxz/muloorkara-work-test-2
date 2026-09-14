import { createFileRoute } from '@tanstack/react-router'
import { ServiceDetail, pageHead } from '../components/Site'
import { services } from '../content/site'
export const Route = createFileRoute('/services_/civil-structural-engineering')({ head: () => pageHead('Civil & Structural Engineering', services[1].short), component: () => <ServiceDetail service={services[1]} /> })
