import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

// Этот сервис наследуется от предыдущего, немного его улучшая.
// К примеру мы хотим использовать этот новый сервис вместо старого,
// а старый оставить в качестве точки входа
// т.е. обращаться мы будем к старому, но отрабатывать будет новый.
// для этого нужно по хитрому запровайдить его в эппМодуле, он там запровайден, посмотри

@Injectable()
export class BetterLoggerService extends LoggerService {

  override info(msg: string) {
    super.info('----' + msg + '----')
  }
}
