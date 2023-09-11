import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  message: string
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  response = '';

  constructor(
    private http: HttpClient
  ) { }

  getHelloWorld() {
    let url = 'http://127.0.0.1:5001/gomad-craft-show/us-central1/helloWorld';
    /* make a GET request to the server that hosts the cloud function, 
      helloWorld */
    this.http.get(url)
      .subscribe( res => {
        let data = res as Response;

        this.response = data.message;
      }
    );
  }

}
