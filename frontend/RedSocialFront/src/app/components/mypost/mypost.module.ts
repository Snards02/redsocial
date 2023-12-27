import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostRoutingModule } from './mypost-routing.module';
import { FormsModule } from '@angular/forms';
import { MypostComponent } from './mypost.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MypostComponent],
  imports: [
    CommonModule,
    MypostRoutingModule,
    FormsModule,
    NgbModalModule
  ]
})
export class MypostModule { }
