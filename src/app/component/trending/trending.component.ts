import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  Trending:any
  type:any
  time:any
  toggleSize:boolean= true
  constructor(private _ApiService:ApiService , private routeAC:ActivatedRoute) { }

  ngOnInit(): void {

        this.routeAC.params
        .pipe(map((prams) => [prams.type, prams.time]))
        .subscribe(([type,time]) =>
            this._ApiService.getTrending(type, time).subscribe((res) => {
              this.Trending = res.results;
            })
          );
          this.routeAC.params.pipe(map((prams)=>prams.type)).subscribe((type)=> this.type = type)
          this.routeAC.params.pipe(map((prams)=>prams.time)).subscribe((time)=> this.time = time)
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
