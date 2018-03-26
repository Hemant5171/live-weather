import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather-services.service';
import {WeatherResult} from '../../model/weather-results';
<<<<<<< HEAD
import {List} from '../../model/list';


=======
>>>>>>> 37bc4b52a601ee8163d9674b8f59e3cf27dc90bb

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  //styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {


  public searchForm: FormGroup;
  public weatherResult:WeatherResult;
<<<<<<< HEAD
  public list:List;
=======
>>>>>>> 37bc4b52a601ee8163d9674b8f59e3cf27dc90bb

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

<<<<<<< HEAD
 getWeatherForecastBasedOnCity()
  {
  let city=this.searchForm.value.searchInput;
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


=======
>>>>>>> 37bc4b52a601ee8163d9674b8f59e3cf27dc90bb
 createSearchForm() {
    this.searchForm = this._formBuilder.group({
      searchInput: ["Pune", Validators.required]
    });
  }


  ngOnInit() {
    this.createSearchForm();
  }

}
