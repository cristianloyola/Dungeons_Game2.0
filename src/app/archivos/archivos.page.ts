import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, AlertController, NavController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.page.html',
  styleUrls: ['./archivos.page.scss'],
})
export class ArchivosPage implements OnInit {
 
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,public alertController: AlertController,public actionSheetController: ActionSheetController,public navcontroller: NavController, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout(){
    this.outLoading()
          this.navcontroller.navigateBack('');
  }
  test(){
    window.location.reload(true)
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
