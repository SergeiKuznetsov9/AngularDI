import { Component } from '@angular/core';
import { BetterLoggerService } from 'src/app/services/2/better-logger.service';
import { LoggerService } from 'src/app/services/2/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {

  constructor(
    logger: LoggerService,    
  ) {
/*     logger.info('Test Service') */
  }

}
