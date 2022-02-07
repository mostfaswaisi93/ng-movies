import { AppDirectiveDirective } from './../../directivs/app-directive.directive';
import { AllseasonComponent } from './../../component/allseason/allseason.component';
import { TvcategoryComponent } from './../../component/tvcategory/tvcategory.component';
import { TvDetailsComponent } from './../../component/tv-details/tv-details.component';
import { TvComponent } from 'src/app/component/tv/tv.component';
import { ToprateComponent } from '../../component/categoryMovies/toprate.component';
import { SimilarComponent } from './../../component/similar/similar.component';
import { HomeComponent } from '../../component/movies/home.component';
import { EpisodesComponent } from './../../component/episodes/episodes.component';
import { HeaderComponent } from './../../component/header/header.component';
import { LoginComponent } from './../../component/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from 'src/app/component/details/details.component';
import { RecommendationsComponent } from 'src/app/component/recommendations/recommendations.component';
import { TvseasonComponent } from 'src/app/component/tvseason/tvseason.component';
import { SafePipePipe } from 'src/app/pipe/safepipe.pipe';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { SwiperModule } from 'swiper/angular';
import { MatSelectModule } from '@angular/material/select';
import { TrendingComponent } from '../../component/trending/trending.component';
import { SwiperCoverComponent } from '../../component/Home/swiper-cover.component';
import { SearchComponent } from '../../component/search/search.component';

const metrials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  AppRoutingModule,
  MatSidenavModule,
  MatMenuModule,
  CdkAccordionModule,
  MatTabsModule,
  MatCardModule,
  CarouselModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  SwiperModule,
  MatSelectModule,
];
@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    DetailsComponent,
    EpisodesComponent,
    HomeComponent,
    RecommendationsComponent,
    SimilarComponent,
    ToprateComponent,
    TvComponent,
    TvDetailsComponent,
    TvcategoryComponent,
    TvseasonComponent,
    AllseasonComponent,
    SafePipePipe,
    AppDirectiveDirective,
    TrendingComponent,
    SwiperCoverComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    metrials,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    metrials,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    DetailsComponent,
    EpisodesComponent,
    HomeComponent,
    RecommendationsComponent,
    SimilarComponent,
    ToprateComponent,
    TvComponent,
    TvDetailsComponent,
    TvcategoryComponent,
    TvseasonComponent,
    SwiperCoverComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class MetrialModule {}
