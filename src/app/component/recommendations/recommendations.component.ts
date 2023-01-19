import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  moviesrecommendations: any;
  Tvrecommendations: any;
  cheked: any;
  toggleSize:boolean=true
  constructor(
    private _ApiService: ApiService,
    private routeAC: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getrecommendations(id).subscribe((res) => {
        this.moviesrecommendations = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getTvrecommendations(id).subscribe((res) => {
        this.Tvrecommendations = res.results;
      })
    );
    this.routeAC.params
      .pipe(map((prams) => prams.type))
      .subscribe((type) => (this.cheked = type));
    console.log(this.cheked);
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
