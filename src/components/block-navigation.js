import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {RouterLink} from 'angular2/angular2';
//Load pages
// import {Main} from '../index';
// import {AboutBlock} from './about/about';
//
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
//   LocationStrategy, HashLocationStrategy} from 'angular2/angular2';

@Component({
  selector: 'block-navigation',
  directives: [RouterLink]
})
@View({
  templateUrl: 'templates/navigation.html'
})
// @RouteConfig([
//     {path: '/', component: Main, as: '/'},
//     {path: '/about', component: AboutBlock, as: 'about' }
// ])
export class NavigationBlock {
  constructor(){
    console.info('Loaded the navigation component');
  }
}
//bootstrap(NavigationBlock, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
