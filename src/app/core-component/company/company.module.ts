import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';


@NgModule({
  declarations: [
    CreatecompanyComponent,
    CompanylistComponent,
    CompanydetailsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
