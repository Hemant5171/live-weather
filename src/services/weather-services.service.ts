import {Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


import {API_KEY} from '../constant/weather_constant';
import {URL} from '../constant/weather_constant';
import {WeatherResult} from "../model/weather-results";

@Injectable()
export class WeatherService {

  constructor(private _http:Http) { }

   getWeatherDetailsBasedOnCity(city:String): Observable<WeatherResult>
   {
    return this._http.get(URL + city + "&APPID=" + API_KEY + "&units=metric")
      .map(response => {
        console.log("after response");
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Observable.of(null);
      });
  }

}
