import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref-variables',
  templateUrl: './temp-ref-variables.component.html',
  styleUrls: ['./temp-ref-variables.component.css']
})
export class TempRefVariablesComponent {
message=""
getInputValue(value:any){
this.message=value
}
}
