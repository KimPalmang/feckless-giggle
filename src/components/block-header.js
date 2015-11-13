import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'block-header'
})
@View({
  templateUrl: 'templates/header.html'
})

export class HeaderBlock {
  constructor(){
    console.info('Loaded the header component');
  }
}