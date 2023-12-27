import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ModalcrearpostComponent } from '../modalcrearpost/modalcrearpost.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    ModalcrearpostComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    NgbModalModule
  ]
})
export class InicioModule { }
