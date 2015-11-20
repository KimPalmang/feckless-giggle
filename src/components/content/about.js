import {Component, View, NgFor} from 'angular2/angular2';
import {AboutService} from 'services/about-service'
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'block-about',
  viewProviders: [AboutService, HTTP_PROVIDERS]
})

@View({
  directives: [NgFor],
  templateUrl: './views/content/about.html'
})

export class AboutBlock {
  service: AboutService;
  about: Array<any> = [];

  constructor(service: AboutService){
    this.service = service;
  }

}
