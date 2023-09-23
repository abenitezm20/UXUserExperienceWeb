import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  errorNombre: Boolean;
  formularioUbicacion: FormGroup;

  constructor(private router: Router) {
    this.errorNombre = false;
    this.formularioUbicacion = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit() {}

  agregarUbicacion() {
    console.log('Agregando ubicacion');
    if (this.formularioUbicacion.get('nombre')?.errors) {
      console.log('Debe ingresar los datos de la ubicación');
      this.errorNombre = true;
      return;
    }

    const nombre: string = this.formularioUbicacion.get('nombre')?.value;
    this.errorNombre = false;
    this.formularioUbicacion.reset();

    this.router.navigate(['alarma/crear'], {
      queryParams: { ubicacion: nombre },
    });
  }

  cancelarGPS() {
    console.log('Cancelando activacion GPS');
    this.router.navigate(['alarma/crear']);
  }
}
