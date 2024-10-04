import { Component, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../sharedMaterial.module';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,SharedMaterialModule,HomeComponent, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit() {}
}
