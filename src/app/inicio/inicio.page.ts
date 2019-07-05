import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import {Network} from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx'
import 'rxjs/add/observable/of';


declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public network:Network,public dialog:Dialogs,public alertController: AlertController, private navCtrl: NavController, public navcontroller: NavController,public actionSheetController: ActionSheetController,public loadingCtrl: LoadingController, private loadingController: LoadingController, private platform: Platform) {
    this.network.onDisconnect().subscribe(()=>
    {
      this.dialog.alert('Sin Conexión...')
    });
    this.network.onConnect().subscribe(()=>
    {
      setTimeout(()=>
      {
        this.dialog.alert('Estas Conectado a '+this.network.type+' conexión...');
      },2000);
    });
   }

  ngOnInit() {
   
  }
  
  ps4(){
    this.navcontroller.navigateBack('tabs7');
  }
  datos(){
    this.navcontroller.navigateBack('home');
  }
  info(){
    this.navcontroller.navigateForward('tabs8');
  }
  archivos(){
    this.navcontroller.navigateForward('archivos');
  }
  registrar(){
    this.navcontroller.navigateBack('register');
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