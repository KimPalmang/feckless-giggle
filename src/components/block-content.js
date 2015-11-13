import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'block-content'
})
@View({
  templateUrl: 'templates/content.html'
})

export class ContentBlock {
  constructor(){
    console.info('Loaded the content component');
  }
}
