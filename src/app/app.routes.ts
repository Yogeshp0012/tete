import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'upload',
    loadComponent: () =>
        import('./upload/upload.component').then((x) => x.UploadComponent),
},
{
    path: 'analysis',
    loadComponent: () =>
        import('./cluster-analysis/cluster-analysis.component').then((x) => x.ClusterAnalysisComponent),
},
{
    path: 'templates',
    loadComponent: () =>
        import('./upload/upload.component').then((x) => x.UploadComponent),
},
{
    path: '**',
    redirectTo: 'upload',
}
];
