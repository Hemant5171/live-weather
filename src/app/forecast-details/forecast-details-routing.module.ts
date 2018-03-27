import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ForecastDetailsComponent} from "./forecast-details.component";

const routes: Routes = [
  {path: "", component: ForecastDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class ForecastDetailsRouterModule
{
    
}