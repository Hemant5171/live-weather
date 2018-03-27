import {NgModule} from "@angular/core";
import {ForecastDetailsRouterModule} from "./forecast-details-routing.module";
import {ForecastDetailsComponent} from "./forecast-details.component";
import {WeatherService} from "../../services/weather-services.service";
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {WeatherResultModule} from "../weather-result/weather-result.module";

@NgModule({
  imports: [ForecastDetailsRouterModule, CommonModule, ReactiveFormsModule,WeatherResultModule],
  declarations: [ForecastDetailsComponent],
  providers: [WeatherService],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class  ForecastDetailsModule {
}
