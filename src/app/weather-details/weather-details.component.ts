import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from '../../services/weather-services.service';
import {WeatherResult} from '../../model/weather-results';



@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html'
})
export class WeatherDetailsComponent implements OnInit {


  public searchForm: FormGroup;
  public weatherResult:WeatherResult;


  constructor(private _weatherService: WeatherService, private _formBuilder: FormBuilder) {

   }

  getWeatherResultBasedOnCity()
  {
  let city=this.searchForm.value.searchInput;
  this._weatherService.getWeatherDetailsBasedOnCity(city)
  .subscribe(response=>{
   this.weatherResult=response;
  }, error => console.log(error),
        () => {
          console.log("Executed")
        }
  
  )

  }

 createSearchForm() {
    this.searchForm = this._formBuilder.group({
      searchInput: ["Pune", Validators.required]
    });
  }


  ngOnInit() {
    this.createSearchForm();
  }

}
