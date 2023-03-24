import { Component, Inject } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from 'src/app/config/page-config';

@Component({
  selector: 'app-inj-token',
  templateUrl: './inj-token.component.html',
  styleUrls: ['./inj-token.component.css']
})
export class InjTokenComponent {
  title = 'anyTitle'

  constructor(
    // Так на место pageConfig будут внедрены данные токена PAGE_CONFIG
    @Inject(PAGE_CONFIG) pageConfig: PageConfig
  ) {
    this.title = pageConfig.title
    console.log(this.title)
  }

}
