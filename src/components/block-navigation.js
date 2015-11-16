// import { Component, View, bootstrap } from 'angular2/angular2';
// import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, PathLocationStrategy, HashLocationStrategy} from 'angular2/router';

//Pages
import {HomeBlock} from './content/home';
import {AboutBlock} from './content/about';

@Component({
  selector: 'block-navigation'
})

@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'templates/navigation.html'
})

// @RouteConfig([
//   { path: "/", redirectTo: "/" },
//   { path: "/", component: HomeBlock, as: "Home" },
//   { path: '/about', component: AboutBlock, as: 'About' }
// ])

export class NavigationBlock {
  constructor(){
    console.info('Loaded the navigation component');
  }
}
// bootstrap(NavigationBlock, [
//   ROUTER_PROVIDERS,
//   provide(PathLocationStrategy, { useClass: HashLocationStrategy })
// ]).then(
//     success => console.log('App Bootstrapped!'),
//     error => console.log(error)
// );
