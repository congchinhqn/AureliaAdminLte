import {Router, RouterConfiguration} from 'aurelia-router';

export class AppComponent {
  router: Router;

  heading = 'View Child';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'app/backend/dashboard.component', nav: true, title: 'login' },
      { route: 'general-form', name: 'general-form', moduleId: 'app/backend/forms/general-form.component', nav: true, title: 'General Form' },
      { route: 'advanced', name: 'advanced', moduleId: 'app/backend/forms/advanced.component', nav: true, title: 'Advanced' },
      { route: 'buttons', name: 'buttons', moduleId: 'app/backend/elements/buttons.component', nav: true, title: 'Buttons' },
      { route: 'general', name: 'general', moduleId: 'app/backend/elements/general.component', nav: true, title: 'General' },
      { route: 'icons', name: 'icons', moduleId: 'app/backend/elements/icons.component', nav: true, title: 'Icons' },
      { route: 'sliders', name: 'sliders', moduleId: 'app/backend/elements/sliders.component', nav: true, title: 'Sliders' },
      { route: 'timeline', name: 'timeline', moduleId: 'app/backend/elements/timeline.component', nav: true, title: 'Timeline' },
    ]);

    this.router = router;
  }
}
