import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  columnas: string[] = ['#', 'Alarmas', 'Configuración', 'Acciones'];
  datos: Alarma[] = [
    {"codigo":1, "name":"Despertar", "configuracion":"07:00 A.M. Lun, Mar, Mie, Jue, Vie"},
    {"codigo":2, "name":"Reunión", "configuracion":"08:30 A.M. Lun, Mie, Vie"},
    {"codigo":3, "name":"Museo del Oro", "configuracion":"09:00 A.M. Sab"}
  ]
  dataSource:any;

  constructor(private router: Router) {}

  ngOnInit() {  }

  crearAlarma() {
    console.log('Creando alarma');
    this.router.navigate(['alarma/crear']);
  }
}

export interface Alarma {
  codigo: number,
  name: string,
  configuracion: string
}
