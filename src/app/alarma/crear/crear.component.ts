import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  crearAlarma() {
    console.log('Creando alarma');
  }

  activarGPS() {
    console.log('Activando GPS');
    this.router.navigate(['alarma/gps']);
  }

  cancelarCreacion() {
    console.log('Cancelando creacion alarma');
    this.router.navigate(['/alarma/listar']);
  }
}
