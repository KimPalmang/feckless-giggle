import { Component, View } from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'block-navigation'
})

@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './views/blocks/navigation.html'
})

export class NavigationBlock {}
