import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tvcategory',
  templateUrl: './tvcategory.component.html',
  styleUrls: ['./tvcategory.component.css']
})
export class TvcategoryComponent implements OnInit {
  tvcategory:any
  title:any
  toggleSize:boolean = true
  constructor( private _ApiService:ApiService , private router:Router,private routeAC:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeAC.params.pipe(
      map(prams => prams.nameCategory))
      .subscribe(nameCategory =>
    this._ApiService.tvcategory(nameCategory).subscribe(res =>{
      this.tvcategory = res.results
    }));
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
