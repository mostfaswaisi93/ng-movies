import { SearchComponent } from './component/search/search.component';
import { SwiperCoverComponent } from './component/Home/swiper-cover.component';
import { TrendingComponent } from './component/trending/trending.component';
import { TvDetailsComponent } from './component/tv-details/tv-details.component';
import { TvseasonComponent } from './component/tvseason/tvseason.component';
import { TvComponent } from 'src/app/component/tv/tv.component';
import { TvcategoryComponent } from './component/tvcategory/tvcategory.component';
import { ToprateComponent } from './component/categoryMovies/toprate.component';
import { SimilarComponent } from './component/similar/similar.component';
import { RecommendationsComponent } from './component/recommendations/recommendations.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/movies/home.component';
import { DetailsComponent } from './component/details/details.component';
import { EpisodesComponent } from './component/episodes/episodes.component';
import { AllseasonComponent } from './component/allseason/allseason.component';
const routes: Routes = [
  {
    path:'' , redirectTo :'Home' , pathMatch:'full'
  },
  {
    path:'Home',component:SwiperCoverComponent
  },
  /*****************************MOVIES*********************** */
  {
    path:'Movies' , component:HomeComponent
  },
  {
    path:'category/:nameCategory',component:ToprateComponent
  },
  {
    path:'trend/:type/:time' , component:TrendingComponent
  },
  {
    path:'Movies/:id',component:DetailsComponent
  },
  {
    path:'recommenditons/:type/:id' ,component:RecommendationsComponent
  },
  {
    path:'similar/:type/:id' ,component:SimilarComponent
  },
  /****************************** TV *******************************/
  {
    path:'tv',component:TvComponent
  },
  {
    path:'tvcategory/:nameCategory',component:TvcategoryComponent
  },
  {
    path:'tv/:id',component:TvDetailsComponent
  },
  {
    path:'seasons/:id',component:AllseasonComponent
  },
  {
    path:'Episode/:id/:season_number/:episode_number',component:EpisodesComponent
  },
  {
    path:'Tvseason/:id/:season_number',component:TvseasonComponent
  },
  /**************************search************************* */
  {
    path:'search/:query',component:SearchComponent
  },
  /***************************register****************************/
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled',scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
