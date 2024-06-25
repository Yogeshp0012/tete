import { Component } from '@angular/core';

@Component({
  selector: 'app-cluster-analysis',
  standalone: true,
  imports: [],
  templateUrl: './cluster-analysis.component.html',
  styleUrl: './cluster-analysis.component.scss'
})
export class ClusterAnalysisComponent {
    openSideBar(){
        document.getElementById('sidebar-mobile')?.classList.remove("hidden")
      }
}
