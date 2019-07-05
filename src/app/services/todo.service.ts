import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../models/task.interface';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private cuentasCollection: AngularFirestoreCollection<TaskI>;
  private cuentas: Observable<TaskI[]>;

  constructor(db:AngularFirestore, public afs: AngularFirestore) { 
    this.cuentasCollection = db.collection<TaskI>('cuentas');
    this.cuentas = this.cuentasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getCuentas(){
    return this.cuentas;
  }

  getCuenta(id: string){
    return this.cuentasCollection.doc<TaskI>(id).valueChanges();
  }

  updateCuentas(cuenta:TaskI, id: string){
    return this.cuentasCollection.doc(id).update(cuenta);
  }
  
  addCuenta(cuenta: TaskI){
    return this.cuentasCollection.add(cuenta);
  }
  
  removeCuenta(id: string){
    return this.cuentasCollection.doc(id).delete();
  }
  createTask(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  
}