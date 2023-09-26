import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  ubicacion: string | undefined;
  errorNombre: Boolean;
  formularioCrearAlarma: FormGroup;

  oktTheme = {
    container: {
      bodyBackgroundColor: "#FEFCF5",
      buttonColor: "#CD6E5D"
    },
    dial: {
      dialBackgroundColor: "#DADAB8",
      dialActiveColor: "#453B2B",
      dialInactiveColor: "#CDA66C"
    },
    clockFace: {
      clockFaceBackgroundColor: "#DADAB8",
      clockHandColor: "#945934",
      clockFaceTimeInactiveColor: "#000000"
    }
  };


  constructor(private router: Router, private route: ActivatedRoute) {
    this.errorNombre = false;
    this.formularioCrearAlarma = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ubicacion = params['ubicacion'];
      if (this.ubicacion) {
        console.log('Ubicación seleccionada ' + this.ubicacion);
      }

    });
  }

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
