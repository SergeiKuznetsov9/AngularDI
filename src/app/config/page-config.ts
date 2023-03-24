import {InjectionToken} from '@angular/core'

export interface PageConfig {
  title: string;
}

// К примеру, мы хотим внедрить интерфейс в класс
// Мы создаем такой интерфейс и создаем с ним инжекшнТокен (строка в скобках должна быть уникальной)
// Этот токен будет храниться в const PAGE_CONFIG
// после этого провайдим его в модуле, там можно это глянуть

export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config')