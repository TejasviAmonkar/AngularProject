import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos:Todo[];
  constructor(){ 

    this.todos = [
      {
      sno: 1,
      title: "Angular",
      desc: "Description",
      active:true
    },
    {
      sno: 2,
      title: "Java",
      desc: "Description1",
      active:true
    },
    {
      sno: 3,
      title: "React",
      desc: "Description2",
      active:true
    }
    ]

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
