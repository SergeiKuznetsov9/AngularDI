import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User2Service } from 'src/app/services/user2.service';
import { User3Service } from 'src/app/services/user3.service';




export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css'],
  providers: [
    User3Service,
  
  ]
})
export class Main2Component {

  constructor(
    userService: UserService,
    userService2: User2Service,
    userService3: User3Service,
  ) {}

  // В данном компоненте вндрим userService. См данный сервис 

}
