import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buttons:any = [{
    ruta:"/quienSoy",
    texto:"Quien Soy",
    color:""
    },
    {
      ruta:"/login",
      texto:"Salir",
      color:"red"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
