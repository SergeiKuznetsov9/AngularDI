import { Component } from '@angular/core';
import { NewBetterLoggerService } from 'src/app/services/3/new-better-logger.service';
import { NewLoggerService } from 'src/app/services/3/new-logger.service';

@Component({
  selector: 'app-logger3',
  templateUrl: './logger3.component.html',
  styleUrls: ['./logger3.component.css']
})
export class Logger3Component {

  constructor(
    logger: NewLoggerService,
    betterLogger: NewBetterLoggerService,
  ) {
    logger.info('testMessage')
    betterLogger.info('testMessage')
  }

}
