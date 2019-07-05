import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs7',
  templateUrl: './tabs7.page.html',
  styleUrls: ['./tabs7.page.scss'],
})
export class Tabs7Page implements OnInit {
  

  constructor(public navcontroller: NavController) { }
  home()
  {
    this.navcontroller.navigateBack('inicio');
  }
  ngOnInit() {
  }

}
