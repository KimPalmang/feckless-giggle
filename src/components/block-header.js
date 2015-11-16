import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'block-header'
})
@View({
  templateUrl: 'templates/header.html'
})

class HeaderBlock {
  constructor(){
    console.info('Loaded the header component');
  }
}
bootstrap(HeaderBlock);
