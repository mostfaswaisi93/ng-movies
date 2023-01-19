import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  type:any
  time:any
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private _HttpClient:HttpClient) { }
/****************************search*******************************/
getquery(query:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/search/multi?api_key=3ddb762a3639dd820fa586c2bca8c5ad&query='+query+'')
  .pipe(map((res:any)=>{
    return res
  }))
}
/*****************************All***************************** */
getValueForm(type:any , time:any)
{
  this.type = type;
  this.time = time
}
getTrending(type:any , time:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/trending/'+type+'/'+time+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
geTrendingAll():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/trending/movie/week?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
/***************************movies************************** */

getreviews(id:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'/reviews?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getMovievideo(id:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getrecommendations(id:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getsimilar(id:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getMovies():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getpopular():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getMoviesDetails(id:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+id+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getNowPlaying():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getToprated():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getupcoming():Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
category(nameCategory:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/movie/'+nameCategory+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
/***************************** TV ********************************* */
getTv()
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/discover/tv?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvDetails(id:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvOnTheAir()
{
  return this._HttpClient.get<any>('http://api.themoviedb.org/3/tv/on_the_air?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvAiringToday()
{
  return this._HttpClient.get<any>('http://api.themoviedb.org/3/tv/airing_today?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvpopular()
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvToprated()
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/top_rated?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getlatest()
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/latest?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvrecommendations(id:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/recommendations?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvsimilar(id:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/similar?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvreviews(id:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/reviews?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvvideos(id:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/videos?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvseason(id:any,season_number:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/season/'+season_number+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvepisode(id:any,season_number:any,episode_number:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/season/'+season_number+'/episode/'+episode_number+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
getTvepisodevideos(id:any,season_number:any,episode_number:any)
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+id+'/season/'+season_number+'/episode/'+episode_number+'/videos?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
tvcategory(nameCategory:any):Observable<any>
{
  return this._HttpClient.get<any>('https://api.themoviedb.org/3/tv/'+nameCategory+'?api_key=3ddb762a3639dd820fa586c2bca8c5ad')
  .pipe(map((res:any)=>{
    return res
  }))
}
}
