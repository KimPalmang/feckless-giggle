import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'block-header'
})
@View({
  templateUrl: './views/blocks/header.html'
})

export class HeaderBlock {
  headerTxt = '';
  subHeaderTxt = '';
  constructor(){
    this.headerText = 'Hello this is the header';
    this.subHeaderTxt = 'This is the subheader text';
  }
}
