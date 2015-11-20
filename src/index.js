import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, PathLocationStrategy, HashLocationStrategy} from 'angular2/router';
// import {Http, HTTP_PROVIDERS, HTTP_BINDINGS, RequestOptions, JSONP_PROVIDERS} from 'angular2/http';
import {Http} from 'angular2/http'

//Pages
import {HomeBlock} from './components/content/home';
import {AboutBlock} from './components/content/about';

//Load the main components to render the basic view
import {HeaderBlock} from './components/blocks/block-header';
import {NavigationBlock} from './components/blocks/block-navigation';
import {FooterBlock} from './components/blocks/block-footer';

@Component({
  selector: 'main',
  //viewProviders: [AboutService]
})

@View({
  directives: [
    ROUTER_DIRECTIVES,
    HeaderBlock,
    NavigationBlock,
    HomeBlock, AboutBlock, //CONTENT
    FooterBlock
  ],
  templateUrl: 'views/main.html'
})

@RouteConfig([
  { path: "/", redirectTo: "/" },
  { path: "/", component: HomeBlock, as: "Home" },
  { path: '/about', component: AboutBlock, as: 'About' }
])

class Main {
  constructor(){
    //this.about = AboutService;
    console.info('Loaded the main component');
  }
}

bootstrap(Main, [NavigationBlock,
  ROUTER_PROVIDERS,
  Http,
  provide(PathLocationStrategy, { useClass: HashLocationStrategy }),
  // HTTP_PROVIDERS, provide(RequestOptions, {useClass:AboutService})
]).then(
    success => console.log('App Bootstrapped!'),
    error => console.log(error)
).catch(err => console.error(err));
