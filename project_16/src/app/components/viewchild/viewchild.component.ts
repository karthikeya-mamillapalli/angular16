import { Component, ElementRef, ViewChild,signal } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
  preserveWhitespaces: true,
})
export class ViewchildComponent {
  //this is using normal way of communication
  
  @ViewChild('inputValue',{ static: false }) ele!:ElementRef;
  //static ->true -->cdr--- available when component is initialized(ngOnInit())
  //static->false-- available in every change detection
  inputValueWithRef=''
   getValue(el:any){
  this.inputValueWithRef=el.value
}
inputValueWithView=''
getValueViewChild(){
this.inputValueWithView=this.ele.nativeElement.value
}


//using signals 
// @ViewChild ('inputValue') ele!:ElementRef
// inputValueWithRef=signal("")
// inputValueWithView=signal("")

// getValue(el:any){
// this.inputValueWithRef.set(el.value)
// }

// getValueViewChild(){
//   const value=this.ele?.nativeElement?.value
// this.inputValueWithView.set(value)
// }
}
