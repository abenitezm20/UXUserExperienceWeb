import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './alarma/listar/listar.component';
import { CrearComponent } from './alarma/crear/crear.component';
import { EditarComponent } from './alarma/editar/editar.component';
import { GpsComponent } from './alarma/gps/gps.component';

const routes: Routes = [
  { path: '', redirectTo: 'alarma/listar', pathMatch: 'full' },
  { path: 'alarma/listar', component: ListarComponent },
  { path: 'alarma/crear', component: CrearComponent },
  { path: 'alarma/editar', component: EditarComponent },
  { path: 'alarma/gps', component: GpsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
