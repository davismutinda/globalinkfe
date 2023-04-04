import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewuserRoutingModule } from './newuser-routing.module';
import { NewuserComponent } from './newuser.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    NewuserComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    NewuserRoutingModule,
    MatIconModule
  ]
})
export class NewuserModule { }
