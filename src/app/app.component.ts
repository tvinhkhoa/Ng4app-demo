import { Component } from '@angular/core';

// import the InventionsComponent
import { InventionsComponent } from './inventions/inventions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InventionHub';
}
