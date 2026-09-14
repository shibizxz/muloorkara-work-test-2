import { createFileRoute } from '@tanstack/react-router'
import { ServiceDetail, pageHead } from '../components/Site'
import { services } from '../content/site'
export const Route = createFileRoute('/services/project-support')({ head: () => pageHead('Project Support', services[5].short), component: () => <ServiceDetail service={services[5]} /> })
