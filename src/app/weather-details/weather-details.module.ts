import {NgModule} from "@angular/core";
import {GetWeatherDetailsRouterModule} from "./weather-details-routing.module";
import {WeatherDetailsComponent} from "./weather-details.component";
import {WeatherService} from "../../services/weather-services.service";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {WeatherResultModule} from "../weather-result/weather-result.module";

@NgModule({
  imports: [GetWeatherDetailsRouterModule, CommonModule, ReactiveFormsModule,WeatherResultModule],
  declarations: [WeatherDetailsComponent],
  providers: [WeatherService]
})
export class  WeatherDetailsModule {
}
