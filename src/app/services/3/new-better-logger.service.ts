import { Injectable } from '@angular/core';
import { NewLoggerService } from './new-logger.service';

// Эти сервисы нужны для эксперименотов, описанных в ЭппМодуле

@Injectable()
export class NewBetterLoggerService extends NewLoggerService{

  constructor() {
    super();
    this.info('NewBetterLoggerService создан')
  }

  override info(msg: string) {
    super.info('----' + msg + '----')
  }
}
