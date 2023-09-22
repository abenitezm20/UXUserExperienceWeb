import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css'],
})
export class GpsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  agregarUbicacion() {
    console.log('Agregando ubicacion');
  }

  cancelarGPS() {
    console.log('Cancelando activacion GPS');
    this.router.navigate(['alarma/crear']);
  }
}
