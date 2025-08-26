import { Component, ElementRef, ViewChildren,QueryList } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  preserveWhitespaces:true
})
export class Parent2Component {
  @ViewChildren('inputBox')inputBoxes!:QueryList<ElementRef>
  @ViewChildren('Child2Component')children!:QueryList<Child2Component>
LogAllValues(){
  this.inputBoxes.forEach(inputBox => {
    console.log(inputBox.nativeElement.value)
  });
}


greetAll(){
this.children.forEach(child => {
  console.log(child.sayHello())
})
}
}
//foreach is the only array method used for querylist
//parent component multiple times childcomponent ni point chestundi ---->it is view children
