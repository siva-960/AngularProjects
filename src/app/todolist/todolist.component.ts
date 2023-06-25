import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input() createdToDoList:string[]=[];
  getToDO:string[]=[];
  donebtn:boolean=false;
  removebtn:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  action()
  {
    this.donebtn=true;
    this.removebtn=false;
  }
}
