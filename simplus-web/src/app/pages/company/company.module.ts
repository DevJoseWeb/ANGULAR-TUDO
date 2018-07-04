import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CompanyRoutingModule, routedComponents } from './company-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CompanyRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CompanyModule { }
