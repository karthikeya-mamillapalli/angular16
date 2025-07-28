import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
fruits=['Apple','Mango','pears'];

users=[
  {name:"kaka"},
    {name:"kakaaaaa"},
      {name:"alkkkkaka"},
        {name:"asasaskaka"},  {name:"dsdsdkaka"}
]

products=[
  {id:1,name:'Laptop',inStock:true},
  {id:2,name:'Phone',inStock:true},
  {id:3,name:'Mouse',inStock:false},
  {id:4,name:'Keyboard',inStock:true},
  {id:5,name:'jaffa',inStock:false}

]
}
