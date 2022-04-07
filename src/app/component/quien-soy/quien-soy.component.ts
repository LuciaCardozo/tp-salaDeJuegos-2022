import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  buttons:any = [{
    ruta:"/home",
    texto:"Home",
    color:""
    }
  ];
  email:any;
  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
  }
  onLogout(){
    //this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

}
