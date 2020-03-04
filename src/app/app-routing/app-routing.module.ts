import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AvailableComponentsComponent } from '../available-components/available-components.component'; 
import { CountComponentComponent } from '../count-component/count-component.component';
import { SearchByNameComponentComponent } from '../search-by-name-component/search-by-name-component.component'; 

const routes: Routes  = [
  {
    path: 'app',
    component: AppComponent
  }, 
  
  {
    path: 'available-components',
    component: AvailableComponentsComponent
  },

  {
    path: 'count-component',
    component: CountComponentComponent
  },

  {
    path: 'search-by-name-component',
    component: SearchByNameComponentComponent
  }

] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }