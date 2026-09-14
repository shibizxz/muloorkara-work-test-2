import { createFileRoute } from '@tanstack/react-router'
import { ServiceDetail, pageHead } from '../components/Site'
import { services } from '../content/site'
export const Route = createFileRoute('/services/design-documentation')({ head: () => pageHead('Design & Documentation', services[4].short), component: () => <ServiceDetail service={services[4]} /> })
