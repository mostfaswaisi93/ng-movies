import { MetrialModule } from './module/metrial/metrial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    MetrialModule,
    ],
    providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
