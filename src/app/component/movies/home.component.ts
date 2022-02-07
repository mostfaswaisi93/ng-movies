import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation,EffectCoverflow } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation ,EffectCoverflow]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any
  NowPlaying:any
  Toprated:any
  upcoming:any
  getpopular:any
  toggleSize:boolean=true
  constructor(private _ApiService:ApiService ) { }

  ngOnInit(): void {

      this._ApiService.getMovies().subscribe(res=>{
          this.movies = res.results ;
      });
      this._ApiService.getNowPlaying().subscribe(res=>{
        this.NowPlaying = res.results ;
      });
      this._ApiService.getToprated().subscribe(res=>{
        this.Toprated = res.results ;
      });
      this._ApiService.getupcoming().subscribe(res=>{
        this.upcoming = res.results ;
      });
      this._ApiService.getpopular().subscribe(res=>{
        this.getpopular = res.results ;
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
