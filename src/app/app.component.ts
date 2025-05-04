import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('/posts/pictures?method=GetPictures').subscribe((returnedStuff) => {
            console.log(returnedStuff);
        });
    }
}
