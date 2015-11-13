import {Component, View, bootstrap, Provider} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy, RouterLink} from 'angular2/angular2';

//Load pages
import {AboutBlock} from './components/about/about';

//Load the components to render the basic view
import {HeaderBlock} from 'components/block-header';
import {NavigationBlock} from 'components/block-navigation';
import {ContentBlock} from 'components/block-content';
import {FooterBlock} from 'components/block-footer';

@Component({
  selector: 'main',
  directives: [ROUTER_DIRECTIVES]
})

@View({
  directives: [HeaderBlock, NavigationBlock, ContentBlock, FooterBlock],
  templateUrl: 'templates/main.html'
})

@RouteConfig([
    {path: '/', component: Main, as: '/'},
    {path: '/about', component: AboutBlock, as: 'about' }
])

class Main {
  constructor(){
    console.info('Loaded the main component');
  }
}
//bootstrap(Main);
bootstrap(Main, [ROUTER_BINDINGS, ROUTER_PROVIDERS, Provider(LocationStrategy, {useClass: HashLocationStrategy})]);
