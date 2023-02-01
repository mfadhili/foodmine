import { Component } from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food mine! course';

  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg))
  }

  testLog(): void{
    this.log("Test the `log()` Method");
  }
}
