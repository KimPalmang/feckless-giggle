import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, PathLocationStrategy, HashLocationStrategy} from 'angular2/router';

//Pages
import {HomeBlock} from './components/content/home';
import {AboutBlock} from './components/content/about';

//Load the main components to render the basic view
import {HeaderBlock} from './components/block-header';
import {NavigationBlock} from './components/block-navigation';
import {FooterBlock} from './components/block-footer';

@Component({
  selector: 'main'
})

@View({
  directives: [ROUTER_DIRECTIVES, HeaderBlock, NavigationBlock, HomeBlock, AboutBlock, FooterBlock],
  templateUrl: 'templates/main.html'
})

@RouteConfig([
  { path: "/", redirectTo: "/" },
  { path: "/", component: HomeBlock, as: "Home" },
  { path: '/about', component: AboutBlock, as: 'About' }
])

class Main {
  constructor(){
    console.info('Loaded the main component');
  }
}

bootstrap(Main, [
  ROUTER_PROVIDERS,
  provide(PathLocationStrategy, { useClass: HashLocationStrategy })
]).then(
    success => console.log('App Bootstrapped!'),
    error => console.log(error)
);
