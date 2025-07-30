import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
childMessage="hello from child"
showMessage(){
  //window . pattukunte emoji vastdi
  alert ("hello 👋 child called from parent")
}
}
