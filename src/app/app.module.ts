import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { DetailsComponent } from './details/details.component';
import { InventionsService } from './inventions/inventions.service';

const ROUTES: Route[] = [
  { path:'', redirectTo: 'inventions', pathMatch: 'full' },
  { path: 'inventions',
    children: [
      { path: '', component: InventionsComponent},
      { path: 'details/:id', component: DetailsComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      ROUTES,
      {
        enableTracing: true
      }
    )
  ],
  providers: [InventionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
