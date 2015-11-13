import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'block-footer'
})
@View({
  templateUrl: 'templates/footer.html'
})

export class FooterBlock {
  constructor(){
    console.info('Loaded the footer component');
  }
}
