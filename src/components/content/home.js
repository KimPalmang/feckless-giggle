import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'block-home'
})
@View({
  templateUrl: './templates/content/home.html'
})

export class HomeBlock {
  constructor(){
    console.info('Loaded the content component');
  }
}
