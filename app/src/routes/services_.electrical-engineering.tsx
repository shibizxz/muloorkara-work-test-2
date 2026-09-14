import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, pageHead } from "../components/Site";
import { services } from "../content/site";
export const Route = createFileRoute("/services_/electrical-engineering")({
  head: () => pageHead("Electrical Engineering", services[0].short),
  component: () => <ServiceDetail service={services[0]} />,
});
