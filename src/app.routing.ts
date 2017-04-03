import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class AppRoutingModule {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Admin Lte';
    config.map([
      { route: ['', 'login'], name: 'login', moduleId: 'app/login.component', nav: true, title: 'login' },
      { route: 'admin', name: 'admin', moduleId: 'app/app.component', nav: true, title: 'Admin Page' },
    ]);

    this.router = router;
  }
}