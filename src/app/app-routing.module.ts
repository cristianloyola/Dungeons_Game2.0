import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'tabs7', loadChildren: './tabs7/tabs7.module#Tabs7PageModule' },
  { path: 'tabs8', loadChildren: './tabs8/tabs8.module#Tabs8PageModule' },
  { path: 'todo-details/:id', loadChildren: './todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'todo-details', loadChildren: './todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'archivos', loadChildren: './archivos/archivos.module#ArchivosPageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
