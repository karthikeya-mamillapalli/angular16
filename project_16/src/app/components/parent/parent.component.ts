import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComp! :ChildComponent
topicName='view child with component reference';
callChildMethod(){
this.childComp.showMessage()
}
}
