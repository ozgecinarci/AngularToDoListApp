import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  
    pendings= [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
      
      
    ];
    inProgress=[
      
      'Take a shower',
      'Check e-mail',
      'Walk dog',
      'Read a book',

    ];
    done= [
      'Get up',
      'Brush teeth',
      'Drink coffee'

    ];

  
  
 

  constructor(
    
  ) { }

  ngOnInit()  {
    //this.setItems();

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }
 
  addTodo(todo:any){
 
   this.pendings.push(todo.value);
   todo.value='';
   localStorage.setItem('pendings',JSON.stringify(this.pendings))

  }

    setItems(){
    if(!localStorage.getItem('pendings')){
      localStorage.setItem('pendings',JSON.stringify(this.pendings));

    }
    else{
      this.pendings=JSON.parse(localStorage.getItem('inProgress') || '');
    }
    if(!localStorage.getItem('inProgress')){
      localStorage.setItem('inProgress',JSON.stringify(this.inProgress));

    }
    else{
      this.pendings=JSON.parse(localStorage.getItem('done') || '');
    }
    if(!localStorage.getItem('done')){
      localStorage.setItem('done',JSON.stringify(this.done));

    }
    else{
      this.pendings=JSON.parse(localStorage.getItem('done') || '');
    }

  }
  

}
