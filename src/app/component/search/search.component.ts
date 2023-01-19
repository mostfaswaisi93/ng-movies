import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchMovies:any
  toggleSize:boolean=true
  constructor(public _ApiService:ApiService , private routeAC:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.routeAC.params.pipe(map((prams) => prams.query)).subscribe((query) =>
    this._ApiService.getquery(query).subscribe((res) => {
      this.searchMovies = res;
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
