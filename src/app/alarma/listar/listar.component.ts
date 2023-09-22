import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  crearAlarma() {
    console.log('Creando alarma');
    this.router.navigate(['alarma/crear']);
  }
}
