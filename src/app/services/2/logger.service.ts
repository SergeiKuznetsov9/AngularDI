import { Injectable } from '@angular/core';

// Зарегистрируем этот сервис в корневом модуле и внедрим в компоненте Логер

@Injectable()
export class LoggerService {

  info(msg: string) {
    console.log(msg)
  }

}
