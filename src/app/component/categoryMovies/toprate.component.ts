import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-toprate',
  templateUrl: './toprate.component.html',
  styleUrls: ['./toprate.component.css']
})
export class ToprateComponent implements OnInit {

  category:any
  title:any
  toggleSize:boolean=true
  constructor( private _ApiService:ApiService , private routeAC:ActivatedRoute) { }

  ngOnInit(): void {

    this.routeAC.params.pipe(map((prams) => prams.nameCategory)).subscribe((nameCategory) =>
    this._ApiService.category(nameCategory).subscribe((res) => {
      this.category = res.results;
    })
  );
    this.routeAC.params.pipe(map((prams) => prams.nameCategory)).subscribe((nameCategory) => this.title = nameCategory);
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
