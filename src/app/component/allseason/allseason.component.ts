import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-allseason',
  templateUrl: './allseason.component.html',
  styleUrls: ['./allseason.component.css']
})
export class AllseasonComponent implements OnInit {
  AllSeasonTvDetails:any
  id:any
  toggleSize:boolean = true
  constructor(private _ApiService:ApiService , private router:Router , private routeAC:ActivatedRoute) { }

  ngOnInit(): void {
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
