import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router = inject(Router);
  darkMode: boolean = true;

  selected: string = "upload";

  toggleLightMode(){
    this.darkMode = false;
    document.getElementById("mode")?.classList.remove("dark");
  }

  toggleDarkMode(){
    this.darkMode = true;
    document.getElementById("mode")?.classList.add("dark");
  }

  closeSideBar(){
    document.getElementById('sidebar-mobile')?.classList.add("hidden")
  }

  openSideBar(){
    document.getElementById('sidebar-mobile')?.classList.remove("hidden")
  }

}
