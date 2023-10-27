import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './_services/data.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { ProductServerComponent } from './product-server/product-server.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NavbarComponent,
    BindingsComponent,
    PageNotFoundComponent,
    EditProductComponent,
    LoginComponent,
    ObservableComponent,
    ProductServerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
