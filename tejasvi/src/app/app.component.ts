import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  constructor(){
   // setTimeout(() => {
   //   this.title = 'change title'
   // }, 2000);
  }
}
