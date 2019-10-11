import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

// tslint:disable-next-line: max-line-length
import {} from "@angular/material";

const routes: Routes = [];
// tslint:disable-next-line: import-spacing
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
    // tslint:disable-next-line: max-line-length
  ],
  exports: [
    RouterModule
    // tslint:disable-next-line: max-line-length
  ]
})
export class AppRoutingModule {}
