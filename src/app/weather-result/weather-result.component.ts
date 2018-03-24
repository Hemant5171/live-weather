import { Component, Input } from '@angular/core';
import {WeatherResult} from "../../model/weather-results";
import {WeatherService} from "../../services/weather-services.service";


@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent  {

@Input() 
  weatherResult: WeatherResult;

  constructor(private _weatherService: WeatherService)
  {

   }

 

}
