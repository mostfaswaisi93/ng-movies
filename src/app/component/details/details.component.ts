import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  moviesDetails: any;
  moviesrecommendations: any;
  moviesimilar: any;
  reviews: any;
  getMovievideo: any;
  url = 'https://www.youtube.com/embed/';
  IDmoviesDetails:any
  constructor(
    private _ApiService: ApiService,
    private routeAC: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getMoviesDetails(id).subscribe((res) => {
        this.moviesDetails = [res];
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
    this._ApiService.getMoviesDetails(id).subscribe((res) => {
      this.IDmoviesDetails = res;
    })
  );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getMovievideo(id).subscribe((res) => {
        this.getMovievideo = res;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
    this._ApiService.getrecommendations(id).subscribe((res) => {
      this.moviesrecommendations = res;
    })
  );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getsimilar(id).subscribe((res) => {
        this.moviesimilar = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getreviews(id).subscribe((res) => {
        this.reviews = res.results;
      })
    );

  }
}
