import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company.service';


import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
  { path: 'third-page', component: ThirdPageComponent},
  { path: 'company', component: CompanyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    CompanyComponent,
    ThirdPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
