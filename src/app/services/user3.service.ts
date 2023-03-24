import { Injectable } from '@angular/core';


// Третий вариант провайдинга сервиса - напрямую в компонент. Добавляется
// он в поле providers конфига декоратора компонента
@Injectable()
export class User3Service {

  constructor() { }
}
