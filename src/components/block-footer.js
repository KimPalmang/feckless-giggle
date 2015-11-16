import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'block-footer'
})
@View({
  templateUrl: 'templates/footer.html'
})

class FooterBlock {
  constructor(){
    console.info('Loaded the footer component');
  }
}
bootstrap(FooterBlock);
