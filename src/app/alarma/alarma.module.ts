import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { GpsComponent } from './gps/gps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, RouterModule, GoogleMapsModule, ReactiveFormsModule, NgxMaterialTimepickerModule, MatTableModule, MatButtonToggleModule, MatButtonModule],
  declarations: [
    ListarComponent,
    CrearComponent,
    EditarComponent,
    GpsComponent,
  ],
  exports: [ListarComponent, CrearComponent, EditarComponent, GpsComponent],
})
export class AlarmaModule {}
