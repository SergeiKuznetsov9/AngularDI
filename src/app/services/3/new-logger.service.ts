import { Injectable } from '@angular/core';

@Injectable()
export class NewLoggerService {

  info(msg: string) {
    console.log(msg)
  }
}
