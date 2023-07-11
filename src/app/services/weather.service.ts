import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=80ea139dbc19d7a8a7a01874d540be4b&units=metric`
    return this.http.get<WeatherData>(url)
  }
}
