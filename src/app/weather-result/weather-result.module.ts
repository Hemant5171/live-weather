import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WeatherResultComponent} from "./weather-result.component";

@NgModule({
  imports: [CommonModule],
  declarations: [WeatherResultComponent],
  exports: [WeatherResultComponent],
})
export class WeatherResultModule {
}
