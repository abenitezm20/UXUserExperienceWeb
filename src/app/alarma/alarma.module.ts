import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { GpsComponent } from './gps/gps.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ListarComponent,
    CrearComponent,
    EditarComponent,
    GpsComponent,
  ],
  exports: [ListarComponent, CrearComponent, EditarComponent, GpsComponent],
})
export class AlarmaModule {}
