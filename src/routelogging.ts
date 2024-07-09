import { Application } from 'express';

interface RouteInfo {
  method: string;
  path: string;
}

export const logRoutes = (app: Application): void => {
  const routes: RouteInfo[] = [];

  app._router.stack.forEach((middleware: any) => {
    if (middleware.route) {
      // Routes registered directly on the app
      const route = middleware.route;
      const methods = Object.keys(route.methods).join(', ').toUpperCase();
      routes.push({ method: methods, path: route.path });
    } else if (middleware.name === 'router') {
      // Routes added through router middleware
      middleware.handle.stack.forEach((handler: any) => {
        const route = handler.route;
        if (route) {
          const methods = Object.keys(route.methods).join(', ').toUpperCase();
          routes.push({ method: methods, path: route.path });
        }
      });
    }
  });

  console.log('Registered routes:');
  routes.forEach(route => console.log(`${route.method}: ${route.path}`));
};
