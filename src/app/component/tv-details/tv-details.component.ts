import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit {
  TvDetails: any;
  Tvrecommendations: any;
  Tvsimilar: any;
  Tvreviews: any;
  getTvvideos: any;
  getTvseason: any;
  id: any;
  url = 'https://www.youtube.com/embed/';
  constructor(
    private _ApiService: ApiService,
    private routeAC: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvDetails(id).subscribe((res) => {
        this.TvDetails = res;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvrecommendations(id).subscribe((res) => {
        this.Tvrecommendations = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvsimilar(id).subscribe((res) => {
        this.Tvsimilar = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvreviews(id).subscribe((res) => {
        this.Tvreviews = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvvideos(id).subscribe((res) => {
        this.getTvvideos = res.results[0];
      })
    );
  }
}
