const createNavigationRoutes = (screens, routes) => {
  if (routes && routes.length) {
    return routes.reduce((prev, route) => {
      const curr = screens.find((screen) => screen.screenTitle === route);
      if (curr) {
        return {
          ...prev,
          [curr.screenTitle]: {
            screen: curr.component,
          },
        };
      }
      return { ...prev };
    }, {});
  }
  return screens.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.screenTitle]: {
        screen: curr.component,
      },
    };
  }, {});
};

export default createNavigationRoutes;
