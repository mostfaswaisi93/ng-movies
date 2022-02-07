import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  getTvepisode: any;
  resepisode: any;
  getTvepisodevideos: any;
  getTvseason: any;
  AllSeasonTvDetails: any;
  id: any;
  url = 'https://www.youtube.com/embed/';
  constructor(
    private _ApiService: ApiService,
    private routeAC: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeAC.params
    .pipe(map((prams) => [prams.id,prams.season_number,prams.episode_number]))
    .subscribe(([id,season_number,episode_number]) => {
      this._ApiService.getTvepisode(id,season_number,episode_number).subscribe(res=>{
        this.getTvepisode = [res] ;
      })
    });

    this.routeAC.params
    .pipe(map((prams) => [prams.id,prams.season_number,prams.episode_number]))
    .subscribe(([id,season_number,episode_number]) => {
      this._ApiService.getTvepisode(id,season_number,episode_number).subscribe(res=>{
        this.resepisode = res ;
      })
    });

    this.routeAC.params
      .pipe(map((prams) => [prams.id, prams.season_number]))
      .subscribe(([id,season_number]) =>
          this._ApiService.getTvseason(id, season_number).subscribe((res) => {
            this.getTvseason = res.episodes;
          })
        );

        this.routeAC.params
        .pipe(map((prams) => [prams.id,prams.season_number,prams.episode_number]))
        .subscribe(([id,season_number,episode_number]) => {
          this._ApiService.getTvepisodevideos(id,season_number,episode_number).subscribe(res=>{
            this.getTvepisodevideos = res ;
          })
        });
        this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
        this._ApiService.getTvDetails(id).subscribe((res) => {
          this.AllSeasonTvDetails = res;
        })
      );
  }
  getPrams()
  {
    this.routeAC.params
    .pipe(map((prams) => [prams.id, prams.season_number]))
    .subscribe(([id,season_number]) =>
          this.router.navigate(['/Tvseason/'+id+'/'+season_number])
      );
  }
}
