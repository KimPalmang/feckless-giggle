import {Inject, Component} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class AboutService {

  result: Object[];

  constructor(http: Http) {
    http.get('./content/about.json').subscribe(res => {
      this.result = res.json()
    });
  }

  getData(): any {
    return this.result;
  };

}
