import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/grid1/grid1.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    Grid1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2TableModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
