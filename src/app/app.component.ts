import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/map";
import {BaseProvider} from "./BaseProvider";
import {Router} from "@angular/router";
import {User} from "./User";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends BaseProvider{


    Jsondata = new User();
    constructor(private http: Http) {
        super(http);
    }


    makeLogin( ) {
        return this.makeGetCall( "http://localhost:8080/userslogin/?username=chandu&password=1234").map(res => res);
    }

    login()
    {

      this.makeLogin().subscribe(
          data => {
              this.Jsondata = <User>data.json();
              console.log(JSON.stringify(data));
              console.log(data.json());
              console.log(this.Jsondata);
              //console.log(data.name);

          },
          err => console.error(err),
          () => console.log("here")
      );
      debugger;
      console.log("success");
    }


}
