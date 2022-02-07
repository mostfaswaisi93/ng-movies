import {  ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tvseason',
  templateUrl: './tvseason.component.html',
  styleUrls: ['./tvseason.component.css']
})
export class TvseasonComponent implements OnInit {
  getTvepisode:any
  getTvepisodevideos:any
  getTvseason:any
  AllSeasonTvDetails:any
  id:any
  toggleSize:boolean = true
  constructor(private _ApiService:ApiService  ,private routeAC:ActivatedRoute) { }

  ngOnInit(): void {


    this.routeAC.params
      .pipe(map((prams) => [prams.id, prams.season_number]))
      .subscribe(([id,season_number]) =>
          this._ApiService.getTvseason(id, season_number).subscribe((res) => {
            this.getTvseason = res;
          })
        );
        this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
        this._ApiService.getTvDetails(id).subscribe((res) => {
          this.AllSeasonTvDetails = res;
        })
      );
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
