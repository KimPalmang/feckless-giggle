import {Component, View, NgFor} from 'angular2/angular2';
import {InstagramService} from 'services/instagram-service';
import {Http, HTTP_PROVIDERS, JSONP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'image-block',
  viewProviders: [InstagramService, HTTP_PROVIDERS, JSONP_PROVIDERS]
})

@View({
  directives: [NgFor],
  templateUrl: './views/content/images.html'
})
export class ImageBlock {
  service: InstagramService;
  constructor(service: InstagramService){
    this.service = service;
    console.log('this image block', this);
  }
}
