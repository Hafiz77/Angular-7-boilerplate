import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data/data.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ToUpperPipe } from './pipes/to-upper.pipe';
import { FormsModule } from '@angular/forms';
import { DynamicColorDirective } from './directives/dynamic-color.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UsercreateComponent } from './user/usercreate/usercreate.component';
import { UsercdetailsComponent } from './user/usercdetails/usercdetails.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ToUpperPipe,
    DynamicColorDirective,
    UserlistComponent,
    UsercreateComponent,
    UsercdetailsComponent,
    UserupdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
