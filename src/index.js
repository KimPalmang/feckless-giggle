import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, PathLocationStrategy, HashLocationStrategy} from 'angular2/router';

//Pages
import {HomeBlock} from './components/content/home';
import {AboutBlock} from './components/content/about';
import {ImageBlock} from './components/content/images';

//Load the main components to render the basic view
import {HeaderBlock} from './components/blocks/block-header';
import {NavigationBlock} from './components/blocks/block-navigation';
import {FooterBlock} from './components/blocks/block-footer';

@Component({
  selector: 'main',
  viewProviders: [HomeBlock, AboutBlock, ImageBlock]
})

@View({
  directives: [
    ROUTER_DIRECTIVES,
    HeaderBlock,
    NavigationBlock,
    FooterBlock
  ],
  templateUrl: 'views/main.html'
})

@RouteConfig([
  { path: "/", redirectTo: "/" },
  { path: "/", component: HomeBlock, as: "Home" },
  { path: '/about', component: AboutBlock, as: 'About' },
  { path: '/images', component: ImageBlock, as: 'Images' }
])

class Main {
  constructor(){
    console.info('Loaded the main component');
  }
}

bootstrap(Main, [NavigationBlock,
  ROUTER_PROVIDERS,
  provide(PathLocationStrategy, { useClass: HashLocationStrategy }),
]).then(
    success => console.log('App Bootstrapped!'),
    error => console.log(error)
).catch(err => console.error(err));
