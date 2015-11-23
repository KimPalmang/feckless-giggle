import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {RequestOptions, Request, RequestMethods, BaseRequestOptions} from 'angular2/http';
import {Jsonp, JSONP_PROVIDERS} from 'angular2/http';

import {Injectable, Injector} from 'angular2/angular2';



@Injectable()
export class InstagramService {
  constructor(http: Http, jsonp: Jsonp){
    console.log(this);
  }
}
