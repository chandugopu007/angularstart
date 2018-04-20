import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
@Injectable()
export class BaseProvider {
    API_URL = "http://localhost:5000/";
    headers: Headers;
    options: RequestOptions;
    phttp: Http;
    error: Error;
    status: number;

    constructor(http: any) {
        this.headers = new Headers();
        this.phttp = <Http>http;
        this.addHeader("Content-Type", "application/json");
        this.options = new RequestOptions({ headers: this.headers });
    }
    addHeader(key: string, value: string) {
        this.headers.set(key, value);
    }
    getHeaders() {
        this.options = new RequestOptions({ headers: this.headers });
        return this.options;
    }
    getJSONfromModel(model) {
        // Converts an TO into string
        if (model) {
            return JSON.stringify(model);
        }
    }

    makeGetCall(resourceURL: string) {

        const data =  this.phttp.get(resourceURL).map(res => res);
        console.log(data);
        return data;
    }
}
