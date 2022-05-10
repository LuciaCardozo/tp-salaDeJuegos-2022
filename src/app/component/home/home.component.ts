import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/dataBase/data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buttons:any = [{
    ruta:"/quienSoy",
    texto:"Who I'm?",
    color:""
    },
    {
      ruta:"/login",
      texto:"",
      color:""
    }
  ];

  juegos = [{
    nombre:"Ahorcado",
    route:"/juegos/ahorcado",
    descripcion:"",
    img:"../../../assets/ahorcado.png"
  }, {
    nombre:"Mayor o Menor",
    route:"/juegos/mayorOMenor",
    descripcion:"",
    img:"../../../assets/MayorOMenor.webp"
  }];

  title:string = "";
  email: any;
  constructor(private database:DataBaseService, private router:Router) { }

  ngOnInit(): void {
    this.email = this.database.emailUsuarioLogeado;
    this.title = "Welcome "+ this.email.split('@')[0].charAt(0).toUpperCase()+
    this.email.split('@')[0].substr(1).toLowerCase();
  }

  juegoSeleccionado(juego:any) {
    this.router.navigate([juego.route]);
  }
}
