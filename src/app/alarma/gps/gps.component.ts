import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css'],
})
export class GpsComponent implements OnInit {
  center = { lat: 4.601737477957504, lng: -74.07200764845754 };
  zoom = 15;
  display?: google.maps.LatLngLiteral;

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
