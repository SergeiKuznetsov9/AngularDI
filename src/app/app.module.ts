import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main1Component } from './components/main1/main1.component';
import { Main2Component } from './components/main2/main2.component';
import { LoggerService } from './services/2/logger.service';
import { User2Service } from './services/user2.service';
import { LoggerComponent } from './components/logger/logger.component';
import { BetterLoggerService } from './services/2/better-logger.service';
import { NewBetterLoggerService } from './services/3/new-better-logger.service';
import { NewLoggerService } from './services/3/new-logger.service';
import { Logger3Component } from './components/logger3/logger3.component';
import { InjTokenComponent } from './components/inj-token/inj-token.component';
import { PAGE_CONFIG } from './config/page-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    Main1Component,
    Main2Component,
    LoggerComponent,
    Logger3Component,
    InjTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [
    User2Service,

    // Это идентичная верхней записи запись, все сокращенные конвертируются в нее
/*     {
      provide: LoggerService,
      useClass: LoggerService
    }, */

    // теперь, обращаясь к старому логеру, отрабатывать будет новый, мы
    // провайдим LoggerService но возвращаем BetterLoggerService
    {
      provide: LoggerService,
      useClass: BetterLoggerService
    },


    // Следующий эксперимент: зарегистрируем второй улучшенный логер, а также второй
    // обычный, который будем подменять улучшенным
    //  Это продемонстрирует, что  NewBetterLoggerService создался дважды
/*     NewBetterLoggerService,
    {
      provide: NewLoggerService,
      useClass: NewBetterLoggerService
    } */


    // Одна из причин этого - это использование useClass, который всякий раз при обрещнии
    // к нему создает новый класс. Для того, чтобы это исправить, 
    // вместо useClass будем использовать useExisting.теперь все хороошо работает. Если экземпляр
    // класса существует, то новый не создается, а передается уже существующий   
/*     NewBetterLoggerService,
    {
      provide: NewLoggerService,
      useExisting: NewBetterLoggerService
    } */



    // В качестве подмены срвиса можено передать какой нибудь литерал и при обращении к сервису сработает он:
    NewBetterLoggerService,
    {
      provide: NewLoggerService,
      useValue: {
        info: (msg: string) => {console.log('Сработала заглушка')}
      }
    },
    {
      provide: PAGE_CONFIG,
      useValue: {
        title: 'I`m study Angular DI'
      }
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
