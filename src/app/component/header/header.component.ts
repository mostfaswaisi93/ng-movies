import { AuthService } from './../../services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  activelink:any
  constructor(public _ApiService:ApiService,private auth:AuthService,private routeAC:ActivatedRoute) { }
  links = ['Movies', 'tv'];
  Loading:any
  query:string=''
  toggleSearch:boolean=true
  searchMovies:any
  ngOnInit()
  {
  }
  ngAfterViewInit()
  {
    this.Loading = this._ApiService.isLoading
  }
  toggleS()
  {
    this.toggleSearch = !this.toggleSearch
  }
}
