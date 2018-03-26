import {Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


import {API_KEY} from '../constant/weather_constant';
import {URL} from '../constant/weather_constant';
<<<<<<< HEAD
import {FORECAST_URL} from '../constant/weather_constant';
import {WeatherResult} from "../model/weather-results";
import {List} from "../model/list";
=======
import {WeatherResult} from "../model/weather-results";
>>>>>>> 37bc4b52a601ee8163d9674b8f59e3cf27dc90bb

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

<<<<<<< HEAD
  getWeatherForecastBasedOnCity(city:String): Observable<List>
   {
    return this._http.get(FORECAST_URL + city + "&APPID=" + API_KEY + "&units=metric")
      .map(response => {
        console.log("after response");
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Observable.of(null);
      });
  }

=======
>>>>>>> 37bc4b52a601ee8163d9674b8f59e3cf27dc90bb
}
