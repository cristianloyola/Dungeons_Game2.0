import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string=""
  password:string=""

  constructor(public afAuth: AngularFireAuth,public navcontroller: NavController,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

async login(){
  const{username, password}=this
  try{
    const res= await this.afAuth.auth.signInWithEmailAndPassword(username +'@gmail.com', password);
    this.inicio();
  } catch(err){
    console.dir(err)
    if(err.code==="auth/user-not-found"){
      console.log("User not found")
      this.usuarioNoEncontrado()
    }
  }

  

}
registrar(){
  this.navcontroller.navigateBack('register');
}
inicio(){
  this.navcontroller.navigateForward('inicio');
}
async usuarioNoEncontrado() {
  const alert = await this.alertCtrl.create({
    header: 'Usuario/Contraseña No Encontrado',
    message: 'Usuario ' + this.username + ' Error de Usuario/Contraseña',
    buttons: [
      {
        text: 'ok',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {}
      }
    ]});
      await alert.present()}

}
