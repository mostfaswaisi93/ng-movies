import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import SwiperCore, { Pagination, Navigation } from "swiper";
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tv:any
  Tvpopular:any
  TvToprated:any
  latest:any
  toggleSize:boolean =true
  // AiringToday:any
  // OnTheAir:any
  constructor(private _ApiService:ApiService ) { }

  ngOnInit(): void {

    this._ApiService.getTv().subscribe(res=>{
      this.tv = res.results ;
  });
  // this._ApiService.getTvAiringToday().subscribe(res=>{
  //   this.AiringToday = res.results ;
  // });
  // this._ApiService.getTvOnTheAir().subscribe(res=>{
  //   this.OnTheAir = res.results ;
  // });
  this._ApiService.getTvpopular().subscribe(res=>{
    this.Tvpopular = res.results ;
  });
  this._ApiService.getTvToprated().subscribe(res=>{
    this.TvToprated = res.results ;
  });
  this._ApiService.getlatest().subscribe(res=>{
    this.latest = [res] ;
  });
}
WidthHeight()
{
  this.toggleSize = true
}
BigWidthHeight()
{
  this.toggleSize = false
}
}
