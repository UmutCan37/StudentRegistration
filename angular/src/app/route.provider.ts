import { RoutesService, eLayoutType } from '@abp/ng.core';
import { inject, provideAppInitializer } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([
    {
      path: '/',
      name: '::Menu:Home',
      iconClass: 'fas fa-home',
      order: 1,
      layout: eLayoutType.application,
    },
    {
      path: '/departments',
      name: 'Departments',
      iconClass: 'fas fa-building',
      order: 2,
      layout: eLayoutType.application,
    },
    {
      path: '/students',
      name: 'Students',
      iconClass: 'fas fa-user-graduate',
      order: 3,
      layout: eLayoutType.application,
    },
  ]);
}
