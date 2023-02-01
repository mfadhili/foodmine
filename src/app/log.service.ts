import {Injectable} from "@angular/core";

@Injectable() /** Creates an injectable service*/

export class LogService {
  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg))
  }
}
