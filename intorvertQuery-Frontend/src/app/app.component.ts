import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from './sharedMaterial.module';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedMaterialModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intorvertQuery';
}
