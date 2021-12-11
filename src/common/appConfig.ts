enum RouteSection {
  Hero = "/heroes",
}

export const routePath = {
  hero: {
    base: RouteSection.Hero,
    profile: `${RouteSection.Hero}/:heroId`,
  },
};
