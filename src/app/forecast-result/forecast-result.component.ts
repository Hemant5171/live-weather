import { Component, Input } from '@angular/core';
import {List} from "../../model/list";
import {WeatherService} from "../../services/weather-services.service";


@Component({
  selector: 'app-forecast-result',
  templateUrl: './forecast-result.component.html',
  styleUrls: ['./forecast-result.component.css']
})
export class ForecastResultComponent  {

  @Input() 
  list: List;

  constructor(private _weatherService: WeatherService)
  {

   }

}
