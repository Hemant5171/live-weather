import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: "find-city-weather",
    loadChildren: "./weather-details/weather-details.module#WeatherDetailsModule",
  },
   {
    path: "forecast-weather",
    loadChildren: "./forecast-details/forecast-details.module#ForecastDetailsModule",
  },
  {path: "", redirectTo: "/find-city-weather", pathMatch: "full"},
  {path: "**", redirectTo: "/find-city-weather", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
