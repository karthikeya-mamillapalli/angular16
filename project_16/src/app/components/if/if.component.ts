import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {
isLoggedIn=true;
isLoading:boolean=true
user={
  name:'karthik',
}
}
