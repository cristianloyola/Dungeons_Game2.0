import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { CuentaService } from '../services/todo.service';
import { ActionSheetController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  cuentas: TaskI[];

  constructor(public cuentaService: CuentaService,public actionSheetController: ActionSheetController,public navcontroller: NavController, private loadingController: LoadingController){}
  
  ngOnInit(){
    this.cuentaService.getCuentas().subscribe((cuentas) =>{
      console.log('Todos', cuentas);
      this.cuentas = cuentas;
    })
    
  }
  test(){
    window.location.reload(true)
  }
  logout(){
    this.outLoading()
          this.navcontroller.navigateBack('');
  }
  onRemove(idTask:string){
    this.cuentaService.removeCuenta(idTask);
  }
  volverInicio(){
    this.navcontroller.navigateBack('inicio');
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Dungeon´s Games 2.0',
      buttons: [{
        text: 'Inicio',
        icon: 'logo-angular',
        handler: () => {
          this.navcontroller.navigateBack('inicio');
          console.log();
        }
      }, {
        text: 'Cuentas',
        icon: 'share',
        handler: () => {
          console.log();
          this.navcontroller.navigateBack('home');
        }
      }, {
        text: 'Archivos',
        icon: 'laptop',
        handler: () => {
          console.log();
          this.navcontroller.navigateBack('archivos');
        }
      }, {
        text: 'Acerca de',
        icon: 'logo-apple',
        handler: () => {
          console.log();
          this.navcontroller.navigateBack('tabs7');
        }
      }, {
        text: '+ Info',
        icon: 'information-circle',
        handler: () => {
          console.log();
          this.navcontroller.navigateBack('tabs8');
        }
      }, {
        text: 'Logout',
        icon: 'key',
        handler: () => {
          console.log();
          this.outLoading()
          this.navcontroller.navigateBack('');
        }
      },
      
      
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
}
async outLoading(){
  const loading = await this.loadingController.create({
    message: 'Logout....'
  });
  await loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 2000);
}
}