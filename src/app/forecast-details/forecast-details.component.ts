import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from '../../services/weather-services.service';
import {List} from '../../model/list';


@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.css']
})
export class ForecastDetailsComponent implements OnInit {

  public searchForm1: FormGroup;
  public list:List;

  constructor(private _weatherService: WeatherService, private _formBuilder: FormBuilder) { }

 getWeatherForecastBasedOnCity()
  {
  let city=this.searchForm1.value.searchInput;
  this._weatherService.getWeatherForecastBasedOnCity(city)
  .subscribe(response=>{
   this.list=response;
   console.log("Forecase "+this.list);

  }, error => console.log(error),
        () => {
          console.log("Executed")
        }
  
  )

  }


 createSearchForm() {
    this.searchForm1 = this._formBuilder.group({
      searchInput: ["Pune", Validators.required]
    });
  }


  ngOnInit() {
    this.createSearchForm();
  }


}
