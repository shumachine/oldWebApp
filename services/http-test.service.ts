import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService{
    constructor (private  _http: Http){}

    getCurrentTime(){
        return this._http.get('http://date.jsontest.com')
                    .map(res => res.json())
    }
    getCustomers(name : string){
        console.log("httpTestService: " + name);
        console.log('http://192.168.209.104:8080/test?name=' + name);

        return this._http.get('http://192.168.229.104:8080/test?name=' + name)
            .map(res => res.json())
    }
}