import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs ,Autoplay ,EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs ,Autoplay ,EffectCoverflow, Pagination]);

@Component({
  selector: 'app-swiper-cover',
  templateUrl: './swiper-cover.component.html',
  styleUrls: ['./swiper-cover.component.css']
})
export class SwiperCoverComponent implements OnInit {
  thumbsSwiper: any;
  TrendingAll:any
  Toprated:any
  TvToprated:any
  links = ['Movies', 'tv'];
  selected = 'option2';
  type =[
    {value:'all'},
    {value:'movie'},
    {value:'tv'}
  ];
  time=[
    {value:'day'},
    {value:'week'}
  ]
  constructor(private _ApiService:ApiService ,private router:Router) { }

  ngOnInit(): void {
    this._ApiService.geTrendingAll().subscribe(res=>{
      this.TrendingAll = res.results ;
  });
  this._ApiService.getToprated().subscribe(res=>{
    this.Toprated = res.results ;
  });
  this._ApiService.getTvToprated().subscribe(res=>{
    this.TvToprated = res.results ;
  });
  }
  view(form:any)
  {
    if(form.valid)
    {
      this.router.navigate(['/trend/', form.value.type , form.value.time])
    }
  }

}
