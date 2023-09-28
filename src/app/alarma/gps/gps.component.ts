import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  nombreAlarma: String | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.errorNombre = false;
    this.formularioUbicacion = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nombreAlarma = params['nombre'];
      if (this.nombreAlarma) {
        console.log('Editando alarma');
      }
    });
  }

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

    if (this.nombreAlarma) {
      this.router.navigate(['alarma/editar'], {
        queryParams: { nombre: this.nombreAlarma, ubicacion: nombre },
      });
    } else {
      this.router.navigate(['alarma/crear'], {
        queryParams: { ubicacion: nombre },
      });
    }
  }

  cancelarGPS() {
    console.log('Cancelando activacion GPS');

    if (this.nombreAlarma) {
      this.router.navigate(['alarma/editar'], {
        queryParams: { nombre: this.nombreAlarma },
      });
    } else {
      this.router.navigate(['alarma/crear']);
    }
  }
}
