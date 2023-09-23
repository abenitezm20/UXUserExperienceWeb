import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  ubicacion: string | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {}

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
