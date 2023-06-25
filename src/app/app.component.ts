import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDOList';

  toDo!:string;
  toDoList:string[]=[];
  searchToDo:string=""
  tempToDoList:string[]=[];
  constructor(){}

  createToDo():void{
    this.toDoList.push(this.toDo);
    this.toDo=""
    this.tempToDoList=this.toDoList;
  }

  getSerachList()
  {
    if(this.searchToDo!=="")
    {
      console.log(this.searchToDo)
      let list:string[]=this.searchToDo.split(",");
      let tempList:string[]=[];
      console.log("search list",list)
      for(let temp of list)
      {
        for(let temp1 of this.toDoList)
        {
          if((temp.length) && !(tempList.includes(temp1))&&temp1.includes(temp))
          {
            tempList.push(temp1);
          }
        }
      }
      console.log("searchlist1",tempList);
      this.tempToDoList=tempList;
      tempList=[];
    }else
    {
      console.log("hi")
      this.tempToDoList=this.toDoList;
    }
  }
}
