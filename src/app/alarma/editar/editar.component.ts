import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  nombreAlarma: string | undefined;
  ubicacion: string | undefined;
  errorNombre: Boolean;
  formularioEditarAlarma: FormGroup;

  oktTheme = {
    container: {
      bodyBackgroundColor: '#FEFCF5',
      buttonColor: '#CD6E5D',
    },
    dial: {
      dialBackgroundColor: '#DADAB8',
      dialActiveColor: '#453B2B',
      dialInactiveColor: '#CDA66C',
    },
    clockFace: {
      clockFaceBackgroundColor: '#DADAB8',
      clockHandColor: '#945934',
      clockFaceTimeInactiveColor: '#000000',
    },
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.errorNombre = false;
    this.formularioEditarAlarma = new FormGroup({
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
        console.log('Alarma seleccionada ' + this.nombreAlarma);
        this.formularioEditarAlarma.get('nombre')?.disable();
        this.formularioEditarAlarma.setValue({
          nombre: this.nombreAlarma,
        });
      }

      this.ubicacion = params['ubicacion'];
      if (this.ubicacion) {
        console.log('Ubicacion seleccionada ' + this.ubicacion);
      }
    });
  }

  editarAlarma() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alarma Modificada',
      showConfirmButton: false,
      timer: 2000,
    });

    this.router.navigate(['/alarma/listar']);
  }

  cancelarEdicion() {
    console.log('Cancelando edicion alarma');
    this.router.navigate(['/alarma/listar']);
  }

  activarGPS() {
    console.log('Activando GPS');
    this.router.navigate(['alarma/gps'], {
      queryParams: { nombre: this.nombreAlarma, ubicacion: this.ubicacion },
    });
  }
}
