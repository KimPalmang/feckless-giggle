import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RequestOptions, Request, RequestMethods} from 'angular2/http';

import {Injectable, Injector} from 'angular2/angular2';

@Injectable()
export class InstagramService {
  images: Array<any>;
  url: String;
  options: Object;
  constructor(http: Http){
    this.url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=264710361.6753051.954631a8c0354dc58dd1726ee41436d0',

    this.options = new RequestOptions({
      //method: Http.Get,
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=264710361.6753051.954631a8c0354dc58dd1726ee41436d0',
      headers: 'Access-Control-Allow-Origin: http://localhost'
    });
    //this.req = new Http(this.options).subscribe(res => {this.images = res;});


    http.get(this.url, headers: 'Access-Control-Allow-Origin: http://localhost')
    .subscribe(res => {
      this.images = res.json();
      console.log(res);
    });
    console.log(this);
  }
}
  //url: url;
  //private accessToken: '264710361.6753051.954631a8c0354dc58dd1726ee41436d0';
  // constructor(http: Http){
  //   var options = new RequestOptions({
  //     method: RequestMethods.Post,
  //     url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=264710361.6753051.954631a8c0354dc58dd1726ee41436d0',
  //     headers: 'Access-Control-Allow-Origin: http://localhost'
  //   });
  //   var req = new Request(options);
  //   console.log('req.method:', req); // Post
  //   console.log('options.url:', options.url);

  //   this.url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=264710361.6753051.954631a8c0354dc58dd1726ee41436d0&callback=getImages';
  //
  //   http.get(url, headers: 'Access-Control-Allow-Origin: http://localhost'
  // }).subscribe(data => {
  //     this.images = data;
  //     console.log(this.images);
  //   });
    // callbackFunction({
    //   //console.log(this);
    // });
    // http.get({
    //   url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=264710361.6753051.954631a8c0354dc58dd1726ee41436d0',
    //   method: 'get',
    //   headers:{'Access-Control-Allow-Origin', 'http://localhost'}
    // }
    //   ,
    //
    // )
    // .map(res => res.json())
    // .subscribe(res => {
    //   res => this.images = res;
    // });
    //console.log('this service images', this);
  //}

  // getImages(): any {
  //   return this.images;
  // }
//}
