import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
  moviesimilar:any
  Tvsimilar:any
  checked:any
  toggleSize:boolean=true
  constructor( private _ApiService:ApiService , private routeAC:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
      this._ApiService.getsimilar(id).subscribe((res) => {
        this.moviesimilar = res.results;
      })
    );
    this.routeAC.params.pipe(map((prams) => prams.id)).subscribe((id) =>
    this._ApiService.getTvsimilar(id).subscribe((res) => {
      this.Tvsimilar = res.results;
    })
  );
  this.routeAC.params
  .pipe(map((prams) => prams.type))
  .subscribe((type) => (this.checked = type));
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
