export enum RouteSection {
  Hero = "/heroes",
}

export const DEFAULT_ROUTE = RouteSection.Hero;

const { NODE_ENV } = process.env;
export const isDev = NODE_ENV === "development";
