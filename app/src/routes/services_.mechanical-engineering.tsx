import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, pageHead } from "../components/Site";
import { services } from "../content/site";
export const Route = createFileRoute("/services_/mechanical-engineering")({
  head: () => pageHead("Mechanical Engineering", services[2].short),
  component: () => <ServiceDetail service={services[2]} />,
});
