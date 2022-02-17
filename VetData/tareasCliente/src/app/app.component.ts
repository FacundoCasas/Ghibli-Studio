import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tareas: any[] = [];
  tarea = {
    id:null,
    nombre:"",
    completado:false
  }

  constructor(
    private appService: AppService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll()
    .subscribe((data: any) => this.tareas = data);
  }

  create(){
    this.appService.create(this.tarea)
      .subscribe(()=> this.getAll());

    this.tarea = {
      id:null,
      nombre:"",
      completado:false
    }  
  }

  edit(tarea:any){
    this.tarea = tarea;
  }
}
