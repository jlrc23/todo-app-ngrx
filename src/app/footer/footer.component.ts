import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../redux/app.reducer';
import {getCountItemLeft} from  './../../redux/todo/todo.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  countItemLeft: number;
  currentFilter: string;

  constructor(private store: Store<AppState> ) {
    this.readCountItemLeft();
    this.readFilterState();
  }

  private readCountItemLeft(){
    this.store.select(getCountItemLeft)
      .subscribe( count =>{
        this.countItemLeft = count;
      });
  }

  private readFilterState(){
    this.store.select('filter').subscribe(filter=>{
      this.currentFilter = filter;
    });
  }

 

}
