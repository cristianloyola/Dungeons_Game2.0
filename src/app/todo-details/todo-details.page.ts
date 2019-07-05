import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
/* import { TodoService } from '../services/todo.service'; */
import {CuentaService} from '../services/todo.service'
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ToastController} from '@ionic/angular';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  
  cuenta: TaskI = {
    Plataforma: '',
    Usuario: '',
    Login: '',
    Contrasena: '',
  };

  cuentaId= null;

  constructor(private route: ActivatedRoute, private nav: NavController, private cuentaService: CuentaService, private loadingController: LoadingController,public ToastCtrl:ToastController) { }

  ngOnInit() {
    this.cuentaId = this.route.snapshot.params['id'];
    if (this.cuentaId){
      this.loadCuenta();
    }
  }

  async loadCuenta(){
    const loading = await this.loadingController.create({
      message: 'Cargando....'
    });
    await loading.present();

    this.cuentaService.getCuenta(this.cuentaId).subscribe(cuenta => {
      loading.dismiss();;
      this.cuenta = cuenta;
    });
  }

  async saveCuenta() {
    const loading = await this.loadingController.create({
      message: 'Guardando....'
    });
    await loading.present();
 
    if (this.cuentaId) {
      this.cuentaService.updateCuentas(this.cuenta, this.cuentaId).then(() => {
        loading.dismiss();
        this.cuentaModif();
        this.nav.navigateForward('home');
      });
    } else {
      this.cuentaService.addCuenta(this.cuenta).then(() => {
        loading.dismiss();
        this.cuentaCreada();
        this.nav.navigateForward('home');
      });
    }
  }
  async onRemoveCuenta(idCuenta:string) {
    this.cuentaService.removeCuenta(idCuenta);
    this.cuentaEliminada();
    this.nav.navigateForward('home');
  }
  async cuentaCreada(){
    const toast= await this.ToastCtrl.create({
  message:'Cuenta Creada',
  duration:1000,
  position:'top'
    });
    toast.present();
}
async cuentaModif(){
  const toast= await this.ToastCtrl.create({
message:'Cuenta Modificada',
duration:1000,
position:'top'
  });
  toast.present();
}
async cuentaEliminada(){
  const toast= await this.ToastCtrl.create({
message:'Cuenta Eliminada',
duration:1000,
position:'top'
  });
  toast.present();
}
}